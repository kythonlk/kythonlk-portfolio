import fs from 'fs';

const wordpressSiteUrl = 'https://blog.lopazint.online';
const wUrl = 'https://localhost:3000/';


async function fetchAndSaveData() {
  try {
    const postsResponse = await fetch(`${wordpressSiteUrl}/wp-json/wp/v2/posts?per_page=50`);
    const postsData = await postsResponse.json();

    const allPosts = [];
    let postIdCounter = 1;

    for (const postData of postsData) {
      console.log(postIdCounter);
      const post = {
        id: postIdCounter++,
        title: postData.title.rendered,
        content: postData.content.rendered,
        excerpt: postData.excerpt.rendered,
        link: postData.link.replace(wUrl, ''),
        img: null,
        date: postData.date
      };

      if (postData.featured_media) {
        const mediaResponse = await fetch(`${wordpressSiteUrl}/wp-json/wp/v2/media/${postData.featured_media}`);
        const mediaData = await mediaResponse.json();
        const imageUrl = mediaData.source_url;
        const imageResponse = await fetch(imageUrl);
        const imageBuffer = await imageResponse.arrayBuffer();
        const buffer = Buffer.from(imageBuffer);

        const imageExtension = imageUrl.split('.').pop();
        const imageFilename = `post-${post.id}-image.${imageExtension}`;
        fs.writeFileSync(`./data/${imageFilename}`, buffer);

        post.img = `/data/${imageFilename}`;
      }

      allPosts.push(post);
    }

    if (!fs.existsSync('./data')) {
      fs.mkdirSync('./data');
    }

    fs.writeFileSync('./data/posts.json', JSON.stringify(allPosts, null, 2));
    console.log('Data fetched and saved to ./data/posts.json');

  } catch (error) {
    console.error('Error fetching or saving data:', error);
  }
}

fetchAndSaveData();
