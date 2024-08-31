import React from 'react';
import YouTube from 'react-youtube';

const Youtube1 = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 py-4 z-50">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl text-black">
            We're delighted to have you{" "}
            <span className="text-green-600">Here! :)</span>
          </h1>
          <p className="mt-10">
            Explore exciting YouTube videos! 🌟 From tech innovations to lifestyle tips and more,🌱 discover engaging content that informs and entertains. 📺 Whether you're into learning new skills or staying updated with the latest trends, there's a video for you. Hit play and start exploring the world of YouTube today! 🚀
          </p>
          {/* Six YouTube videos */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {/* Video 1 */}
            <div className="rounded-lg overflow-hidden" style={{ width: '100%', maxWidth: '360px', marginBottom: '1rem' }}>
              <YouTube videoId="yRzvyYfXzBE" opts={{ width: '100%', height: '180', playerVars: { modestbranding: 1 } }} />
            </div>
            {/* Video 2 */}
            <div className="rounded-lg overflow-hidden" style={{ width: '100%', maxWidth: '360px', marginBottom: '1rem' }}>
              <YouTube videoId="zUwYQ7BU1vw" opts={{ width: '100%', height: '180', playerVars: { modestbranding: 1 } }} />
            </div>
            {/* Video 3 */}
            <div className="rounded-lg overflow-hidden" style={{ width: '100%', maxWidth: '360px', marginBottom: '1rem' }}>
              <YouTube videoId="Wg5e-WJ2MZw" opts={{ width: '100%', height: '180', playerVars: { modestbranding: 1 } }} />
            </div>
            {/* Video 4 */}
            <div className="rounded-lg overflow-hidden" style={{ width: '100%', maxWidth: '360px', marginBottom: '1rem' }}>
              <YouTube videoId="WPu53JByXiY" opts={{ width: '100%', height: '180', playerVars: { modestbranding: 1 } }} />
            </div>
            {/* Video 5 */}
            <div className="rounded-lg overflow-hidden" style={{ width: '100%', maxWidth: '360px', marginBottom: '1rem' }}>
              <YouTube videoId="un8PyUfseSY" opts={{ width: '100%', height: '180', playerVars: { modestbranding: 1 } }} />
            </div>
            {/* Video 6 */}
            <div className="rounded-lg overflow-hidden" style={{ width: '100%', maxWidth: '360px', marginBottom: '1rem' }}>
              <YouTube videoId="gWju_t815JQ" opts={{ width: '100%', height: '180', playerVars: { modestbranding: 1 } }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Youtube1;
