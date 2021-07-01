import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");
const StyleRegister = StyleSheet.create({
  circle1: {
    position: "absolute",
    width: 200,
    height: 200,
    left: 0,
    top: -109,
    backgroundColor: "rgba(173, 210, 201, 0.71)",
    borderRadius: 100,
  },
  circle2: {
    position: "absolute",
    width: 200,
    height: 200,
    left: -100,
    top: -9,
    backgroundColor: "rgba(173, 210, 201, 0.71)",
    borderRadius: 100,
  },
  circle3: {
    position: "absolute",
    width: 200,
    height: 200,
    right: -100,
    bottom: -100,
    backgroundColor: "rgba(173, 210, 201, 0.71)",
    borderRadius: 100,
  },
  title: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 30,
  },
  positionTitle: {
    position: "absolute",
    right: 30,
    top: 125,
  },
  positionText: {
    position: "absolute",
    right: 30,
    top: 170,
  },
  body: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    marginTop: 230,
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    marginLeft: 10,
    width: "80%",
    height: 40,
    borderRadius: 5,
    borderColor: "black",
    paddingLeft: 15,
    paddingRight: 5,
  },
  viewInput: {
    width: width,
    alignItems: "center",
    marginBottom: 20,
  },
  viewTextInput: {
    position: "absolute",
    left: 70,
    top: -10,
    backgroundColor: "white",
  },
  fontText: {
    fontSize: 16,
  },
  viewSex: {
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  viewAccept: {
    flexDirection: "row",
    marginBottom: 20,
    width: "70%",
    marginBottom: 25,
  },
  viewButton: {
    alignItems: "center",
    height: height * 0.05,
    width: "100%",
    justifyContent: "center",
    marginBottom: 25,
  },
  buttonSignIn: {
    width: 256,
    height: 49,
    backgroundColor: "#2D7474",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
  viewTextButtonSignIn: {
    fontWeight: "500",
    fontSize: 18,
    color: "#ffff",
  },
  viewSignIn: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  viewTextSex: {
    fontSize: 16,
    marginTop: 7,
  },
});
export default StyleRegister;
