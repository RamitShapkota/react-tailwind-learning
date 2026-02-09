import {toPng} from 'html-to-image';

const DownloadButton = ({cardRef, fileName}) => {
    const handleDownload = () => {
        if(cardRef.current === null) return;

        toPng(cardRef.current, {cacheBust: true})

        .then((dataUrl) => {
            const link = document.createElement('a');
            link.download = `${fileName}-id-card.png`;
            link.href = dataUrl;
            link.click();
        })
        .catch((err) => console.error('Download failed',err));
    }

    return(
        <button onClick={handleDownload} style={{marginLeft:  "10px", backgroundColor: "#4CAF50", color: "white",padding: "10px" , borderRadius: "5px",
        }}>Download</button>
    );
};

export default DownloadButton;