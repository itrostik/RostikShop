import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={1}
    width={390}
    height={430}
    viewBox="0 0 390 430"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="3" rx="5" ry="5" width="390" height="250" />
    <rect x="250" y="376" rx="5" ry="5" width="140" height="40" />
    <rect x="0" y="265" rx="5" ry="5" width="390" height="35" />
    <rect x="0" y="309" rx="10" ry="10" width="390" height="57" />
    <rect x="0" y="385" rx="0" ry="0" width="100" height="24" />
  </ContentLoader>
);

export default Skeleton;
