import React from "react";

const styles = {
  body: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
  },
  wrapper: {
    width: 233,
    height: 70,
    padding: 24,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
      width: 70,
      height: 70,
  },
  contentContainer: {
    width: 233,
    height: 70,
    padding: 24,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  nameText: {
      color: "black",
      fontSize: 18,
      fontWeight: "bold",
  },
  commentText: {
      color: "black",
      fontSize: 13,
  },
};


function Myfirst (props) {
  return (
    <div style={styles.body}>
      <div style={styles.wrapper}>
        <div style={styles.contentContainer}>
            <span style={styles.nameText}>{props.firstline}</span>
            <span style={styles.commentText}>{props.secondline}</span>
        </div>
        <div>
          <img 
              src = "https://cdn.inflearn.com/public/curation/python.png"
              style = {styles.image}
          />
        </div>
      </div>
    </div> 
  );
}

export default Myfirst;