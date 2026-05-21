export default function Banner({ imgSrc, label }) {
    return (
        <div
            style={{
                margin: "50px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "20px",
                alignItems: "center",
            }}
        >
            <img
                style={{
                    width: "200px",
                    objectFit: "cover",
                    // objectPosition: "-90px 0",
                    borderRadius: "50%",
                }}
                src={imgSrc}
                alt={label}
            />
            <p
                style={{
                    color: "rgb(130,130,130)",
                }}
            >
                {label}
            </p>
        </div>
    );
}
