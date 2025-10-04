export interface Publication {
  id: number;
  title: string;
  link: string;
}

let cachedPublications: Publication[] | null = null;

export async function loadPublications(): Promise<Publication[]> {
  if (cachedPublications) {
    return cachedPublications;
  }

  try {
    const response = await fetch('/data/publications.csv');
    const csvText = await response.text();
    
    const lines = csvText.split('\n').slice(1); // Skip header
    const publications: Publication[] = [];
    
    lines.forEach((line, index) => {
      if (!line.trim()) return;
      
      // Handle CSV parsing with quoted fields
      const match = line.match(/^"?([^"]*(?:"[^"]*"[^"]*)*?)"?\s*,\s*(.+)$/);
      if (match) {
        const title = match[1].replace(/""/g, '"').trim();
        const link = match[2].trim();
        
        publications.push({
          id: index + 1,
          title,
          link
        });
      }
    });
    
    cachedPublications = publications;
    return publications;
  } catch (error) {
    console.error('Error loading publications:', error);
    return [];
  }
}

export function extractTopicsFromTitle(title: string): string[] {
  const topics: string[] = [];
  const lowerTitle = title.toLowerCase();
  
  // Common space biology topics
  const topicKeywords: Record<string, string[]> = {
    'Microgravity': ['microgravity', 'spaceflight', 'space flight', 'weightless'],
    'Bone Health': ['bone', 'osteoblast', 'osteoclast', 'skeletal', 'vertebrae'],
    'Muscle': ['muscle', 'muscular', 'sarcopenia', 'myocyte'],
    'Cardiovascular': ['cardiovascular', 'cardiac', 'heart', 'vascular'],
    'Gene Expression': ['gene expression', 'transcription', 'rna', 'mrna'],
    'Radiation': ['radiation', 'cosmic ray', 'particle radiation'],
    'Plant Biology': ['arabidopsis', 'plant', 'root', 'pollen'],
    'Cell Biology': ['cell', 'cellular', 'mitochondria', 'cytoskeleton'],
    'Immune System': ['immune', 'immunoglobulin', 'macrophage', 'inflammation'],
    'DNA/Genomics': ['dna', 'genomic', 'chromosome', 'methylation'],
    'Metabolism': ['metabolic', 'metabolism', 'lipid', 'glucose']
  };
  
  Object.entries(topicKeywords).forEach(([topic, keywords]) => {
    if (keywords.some(keyword => lowerTitle.includes(keyword))) {
      topics.push(topic);
    }
  });
  
  return topics.length > 0 ? topics : ['General'];
}

export function extractOrganismFromTitle(title: string): string {
  const lowerTitle = title.toLowerCase();
  
  if (lowerTitle.includes('human') || lowerTitle.includes('astronaut')) return 'Humans';
  if (lowerTitle.includes('mice') || lowerTitle.includes('mouse') || lowerTitle.includes('murine')) return 'Mice';
  if (lowerTitle.includes('arabidopsis') || lowerTitle.includes('plant')) return 'Plants';
  if (lowerTitle.includes('drosophila')) return 'Drosophila';
  if (lowerTitle.includes('cell')) return 'Cell cultures';
  if (lowerTitle.includes('bacteria') || lowerTitle.includes('microbial')) return 'Bacteria';
  if (lowerTitle.includes('tardigrade')) return 'Tardigrades';
  
  return 'Various';
}

export function estimateYear(title: string, index: number): number {
  // Estimate based on index (older studies earlier in list)
  // Most publications are from 2015-2024
  return 2024 - Math.floor(index / 60);
}
