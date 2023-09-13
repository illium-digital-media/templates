const Graphic: React.FC<{ styling: string }> = (props) => {
    return (
        <svg className={props.styling} width="170" height="152" viewBox="0 0 170 152" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M152.976 0.5C134.89 0.5 107.641 34.0436 107.641 34.0436L84.9867 62.0055L73.6463 76L79.3032 82.9838L56.649 110.946L35.1101 84.3859C31.1264 79.4784 31.1264 72.5216 35.1101 67.6141L77.7363 15.0338C82.4902 9.1825 78.2675 0.5 70.6452 0.5H16.9973C7.62225 0.5 0 8.02304 0 17.2718V134.728C0 144.004 8.1003 151.5 16.9973 151.5C35.0836 151.5 62.3324 117.956 62.3324 117.956L84.9867 89.9945L96.3271 76L90.6702 69.0163L113.324 41.0543L134.863 67.6141C138.847 72.5216 138.847 79.4784 134.863 84.3859L92.2637 136.966C87.5098 142.818 91.7325 151.5 99.3548 151.5H153.003C162.378 151.5 170 143.977 170 134.728V17.2718C170 7.99607 161.9 0.5 153.003 0.5H152.976Z" fill="#D90B0B" />
        </svg>
    )
}

export default Graphic;