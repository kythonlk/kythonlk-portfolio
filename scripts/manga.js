import fs from 'fs';

async function processMangaData(data) {
  const processedData = [];

  for (const manga of data.data) {
    const coverArtId = manga.relationships.find(
      relationship => relationship.type === 'cover_art'
    )?.id;

    const mangaId = manga.id;

    if (coverArtId) {
      const coverResponse = await fetch(`https://api.mangadex.org/cover/${coverArtId}`);
      const coverData = await coverResponse.json();
      const imageName = coverData.data.attributes.fileName;

      const imgLink = `https://uploads.mangadex.org/covers/${mangaId}/${imageName}`;

      const processedManga = {
        id: manga.id,
        title: manga.attributes.title.en,
        description: manga.attributes.description.en,
        coverArtId,
        imgLink,
      };

      processedData.push(processedManga);
    } else {
      console.log(`Manga ${manga.id} has no cover art.`);
    }
  }

  return processedData;
}

async function main() {
  try {
    const response = await fetch('http://localhost:4321/sample.json');
    const data = await response.json();
    const processedData = await processMangaData(data);

    fs.writeFileSync('./manga_list.json', JSON.stringify(processedData, null, 2));
    console.log('Processed data saved to processed_data.json');

  } catch (error) {
    console.error('Error fetching or processing data:', error);
  }
}

main();
