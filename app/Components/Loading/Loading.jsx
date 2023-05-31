"use client";
import { Skeleton } from "primereact/skeleton";

const Loading = () => {
  const styles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "10px",
  };

  const containerStyle = {
    marginTop: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "50px",
  };

  return (
    <div style={containerStyle}>
      <div style={styles}>
        <Skeleton
          animation="wave"
          className="mb-2"
          width="100px"
          height="20px"
          borderRadius="16px"
        ></Skeleton>
        <Skeleton
          animation="wave"
          className="mb-2"
          width="200px"
          height="300px"
          borderRadius="16px"
        ></Skeleton>
      </div>{" "}
      <div style={styles}>
        <Skeleton
          animation="wave"
          className="mb-2"
          width="100px"
          height="20px"
          borderRadius="16px"
        ></Skeleton>
        <Skeleton
          animation="wave"
          className="mb-2"
          width="200px"
          height="300px"
          borderRadius="16px"
        ></Skeleton>
      </div>{" "}
      <div style={styles}>
        <Skeleton
          animation="wave"
          className="mb-2"
          width="100px"
          height="20px"
          borderRadius="16px"
        ></Skeleton>
        <Skeleton
          animation="wave"
          className="mb-2"
          width="200px"
          height="300px"
          borderRadius="16px"
        ></Skeleton>
      </div>{" "}
      <div style={styles}>
        <Skeleton
          animation="wave"
          className="mb-2"
          width="100px"
          height="20px"
          borderRadius="16px"
        ></Skeleton>
        <Skeleton
          animation="wave"
          className="mb-2"
          width="200px"
          height="300px"
          borderRadius="16px"
        ></Skeleton>
      </div>
    </div>
  );
};

export default Loading;
