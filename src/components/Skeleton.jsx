import ContentLoader from 'react-content-loader';

export const Skeleton = () => (
    <ContentLoader
        className="product-item-block"
        speed={2}
        width={280}
        height={340}
        viewBox="0 0 280 340"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="0" y="0" rx="10" ry="10" width="280" height="300" />
        <rect x="10" y="320" rx="5" ry="5" width="200" height="12" />
        <rect x="10" y="340" rx="5" ry="5" width="220" height="12" />
        <rect x="10" y="360" rx="5" ry="5" width="80" height="12" />
    </ContentLoader>
);