import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    contexImc:{
        flex: 1,
        marginTop: 20,
        paddingTop: 15,
        alignItems: "center",
        width: "100%",

    },
    resultImc: {
        fontSize: 48,
        color: "#ff0043",
        fontWeight:"bold",
    },
    numberImc:{
        fontSize: 48,
        color: "#FF0043",
        fontWeight: "bold",
    },
    titleResultImc:{
        fontSize: 18,
        color: "#FF0043",
        fontWeight: "bold",
    },
    boxSharebutton:{
        width: "100%", 
        alignItems: "center",
        marginBottom:10,
    },
    shared:{
        backgroundColor:"#1877f2",
        borderRadius: 50,
        paddingTop: 5,
        paddingBottom: 5,
    },
    sharedText:{
        color: "#ffffff",
        fontWeight: "bold",
        paddingHorizontal: 30,
    },
});

export default styles