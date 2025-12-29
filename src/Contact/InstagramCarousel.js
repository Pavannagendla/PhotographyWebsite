import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './InstagramCarousel.css';

const InstagramCarousel = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchInstagramData = async () => {
      try {
        const response = await fetch("https://www.instagram.com/hacker_camerawork/?__a=1&__d=dis");
        const data = await response.json();
        const edges = data.graphql.user.edge_owner_to_timeline_media.edges;

        const formattedPosts = edges.map(edge => ({
          id: edge.node.id,
          thumbnail: edge.node.thumbnail_src,
          shortcode: edge.node.shortcode
        }));

        setPosts(formattedPosts.slice(0, 10)); // Show top 10
      } catch (err) {
        console.error("Instagram fetch failed", err);
      }
    };

    fetchInstagramData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 }
      }
    ]
  };

  return (
    <div className="instagram-carousel">
      <h3>Latest from Instagram</h3>
      <Slider {...settings}>
        {posts.map(post => (
          <a
            key={post.id}
            href={`https://www.instagram.com/p/${post.shortcode}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-slide"
          >
            <img src={post.thumbnail} alt="Instagram post" />
          </a>
        ))}
      </Slider>
    </div>
  );
};

export default InstagramCarousel;
