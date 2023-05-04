/* eslint-disable */
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import blogBannerImg from "../assets/image/blogs_banner.jpg";

// Create styles
const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});
const PdfFile = () => {
  return (
    <Document>
      <Page size="A4" style={styles.body}>
        <View>
          <Text style={styles.header} fixed>
            Blog
          </Text>
        </View>
        <View>
          <Image style={styles.image} src={blogBannerImg} />
        </View>
        <View>
          <Text style={styles.text}>
            1. What is the differences between uncontrolled and controlled
            components?
          </Text>
          <Text style={styles.text}>
            Ans. When dealing with form data in React, we can use either
            controlled components or uncontrolled components. when we use
            controlled component, it is handled by React. On the other hand,
            when we use uncontrolled component, it is handled by browser DOM.
            Controlled component help us to validate strongly, specifically and
            easily. Which is not possible uncontrolled component.
          </Text>
        </View>
        <View>
          <Text style={styles.text}>
            2. How to validate React props using PropTypes?
          </Text>
          <Text style={styles.text}>
            Ans. First of all we install the prop-types library, run the
            command: npm i prop-types. Then we import it in the component from
            the 'prop-types' module. For validation, 1. PropTypes.any : The prop
            can be of any data type. 2. PropTypes.bool : The prop should be a
            Boolean. 3. PropTypes.number : The prop should be a number. 4.
            PropTypes.string : The prop should be a string. 5. PropTypes.func :
            The prop should be a function. 6. PropTypes.array : The prop should
            be an array.
          </Text>
        </View>
        <View>
          <Text style={styles.text}>
            3. What is the difference between nodejs and express js?
          </Text>
          <Text style={styles.text}>
            Ans. NodeJS is open-source, cross-platform JavaScript code that runs
            on servers. It uses an asynchronous event-driven model and is
            designed to build scalable network applications. It’s built on
            Google Chrome’s V8 engine. On the other hand, ExpressJS is a web
            application framework for NodeJS. The former provides various
            features that make web application development fast and easy, which
            otherwise takes more time using only the latter. It provides a
            robust set of features for web and mobile applications.
          </Text>
        </View>
        <View>
          <Text style={styles.text}>
            4. What is a custom hook, and why will you create a custom hook?
          </Text>
          <Text style={styles.text}>
            Ans. Custom Hook is a JavaScript function which we create by
            ourselves, when we want to share logic between other JavaScript
            functions. It allows us to reuse some piece of code in several parts
            of our app. We use custom hook, because, it can be reused easily,
            which makes the code cleaner and reduces the time to write the code.
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default PdfFile;
