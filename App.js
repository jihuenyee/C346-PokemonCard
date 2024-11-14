import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SectionList, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        flex: 1,
        fontWeight: 'bold',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'center',
        borderWidth: 1,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    imgStyle: {
        width: 200,
        height: 300,
        margin: 10,
        resizeMode: 'contain',
    },
    container: {
        flexDirection: 'row',
        backgroundColor: 'lavender',
        borderWidth: 1,
    },
});

const database = [
    {data:[
            {key: "Pikachu", num: "25"},
            {key: "Raichu", num: "26"}
        ],
        title: "Electrical", icon: "bolt", bgcolor: "yellow"},
    {data:[
            {key: "Nidoran", num: "29"},
            {key: "Nidorina", num: "30"}
        ],
        title: "Water", icon:"tint", bgcolor: "lightblue"},
    {data:[
            {key: "Vulpix", num: "37"},
            {key: "Ninetales", num: "38"}
        ],
        title: "Fire", icon: "fire", bgcolor: "salmon"},
];

const renderItem = ({ item }) => {
    let img = "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_" + item.num + "-2x.png";
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.textStyle}>{item.key}</Text>
                <View><Image source={{ uri: img }} style={styles.imgStyle} /></View>
            </View>
        </TouchableOpacity>
    );
};

const App = () => {
    return (
        <View style={{flex: 1}}>
            <StatusBar hidden={true} />
            <View style={{borderWidth: 1, padding: 20}}><Button title={"ADD POKEMON"} /></View>
            <SectionList style={{padding: 20}} sections={database} renderItem={renderItem}
                         renderSectionHeader={({ section: { title, icon, bgcolor } }) => (
                             <View style={[styles.header, { backgroundColor: bgcolor }]}>
                                 <Icon name={icon} size={20} color="black" />
                                 <Text style={styles.headerText}>{title}</Text>
                             </View>
                         )}
            />
        </View>
    );
};

export default App;
