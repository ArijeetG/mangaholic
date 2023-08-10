import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
import Topbar from "../components/Topbar";
import { Searchbar } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

const list = [
  {
    id: 1,
    img: "https://www.vhv.rs/dpng/d/309-3091739_pain-from-naruto-manga-hd-png-download.png",
  },
  {
    id: 2,
    img: "https://www.vhv.rs/dpng/d/309-3091739_pain-from-naruto-manga-hd-png-download.png",
  },
  {
    id: 3,
    img: "https://www.vhv.rs/dpng/d/309-3091739_pain-from-naruto-manga-hd-png-download.png",
  },
  {
    id: 4,
    img: "https://www.vhv.rs/dpng/d/309-3091739_pain-from-naruto-manga-hd-png-download.png",
  },
  {
    id: 5,
    img: "https://www.vhv.rs/dpng/d/309-3091739_pain-from-naruto-manga-hd-png-download.png",
  },
  {
    id: 6,
    img: "https://www.vhv.rs/dpng/d/309-3091739_pain-from-naruto-manga-hd-png-download.png",
  },
  {
    id: 7,
    img: "https://www.vhv.rs/dpng/d/309-3091739_pain-from-naruto-manga-hd-png-download.png",
  },
  {
    id: 8,
    img: "https://www.vhv.rs/dpng/d/309-3091739_pain-from-naruto-manga-hd-png-download.png",
  },
  {
    id: 9,
    img: "https://www.vhv.rs/dpng/d/309-3091739_pain-from-naruto-manga-hd-png-download.png",
  },
  {
    id: 10,
    img: "https://www.vhv.rs/dpng/d/309-3091739_pain-from-naruto-manga-hd-png-download.png",
  },
  {
    id: 11,
    img: "https://www.vhv.rs/dpng/d/309-3091739_pain-from-naruto-manga-hd-png-download.png",
  },
  {
    id: 12,
    img: "https://www.vhv.rs/dpng/d/309-3091739_pain-from-naruto-manga-hd-png-download.png",
  },
  {
    id: 13,
    img: "https://www.vhv.rs/dpng/d/309-3091739_pain-from-naruto-manga-hd-png-download.png",
  },
  {
    id: 14,
    img: "https://www.vhv.rs/dpng/d/309-3091739_pain-from-naruto-manga-hd-png-download.png",
  },
  {
    id: 15,
    img: "https://www.vhv.rs/dpng/d/309-3091739_pain-from-naruto-manga-hd-png-download.png",
  },
  {
    id: 16,
    img: "https://www.vhv.rs/dpng/d/309-3091739_pain-from-naruto-manga-hd-png-download.png",
  },
  {
    id: 17,
    img: "https://www.vhv.rs/dpng/d/309-3091739_pain-from-naruto-manga-hd-png-download.png",
  },
  {
    id: 18,
    img: "https://www.vhv.rs/dpng/d/309-3091739_pain-from-naruto-manga-hd-png-download.png",
  },
  {
    id: 19,
    img: "https://www.vhv.rs/dpng/d/309-3091739_pain-from-naruto-manga-hd-png-download.png",
  },
  {
    id: 20,
    img: "https://www.vhv.rs/dpng/d/309-3091739_pain-from-naruto-manga-hd-png-download.png",
  },
  {
    id: 21,
    img: "https://www.vhv.rs/dpng/d/309-3091739_pain-from-naruto-manga-hd-png-download.png",
  },
  {
    id: 22,
    img: "https://www.vhv.rs/dpng/d/309-3091739_pain-from-naruto-manga-hd-png-download.png",
  },
  {
    id: 23,
    img: "https://www.vhv.rs/dpng/d/309-3091739_pain-from-naruto-manga-hd-png-download.png",
  },
  {
    id: 24,
    img: "https://www.vhv.rs/dpng/d/309-3091739_pain-from-naruto-manga-hd-png-download.png",
  },
  {
    id: 25,
    img: "https://www.vhv.rs/dpng/d/309-3091739_pain-from-naruto-manga-hd-png-download.png",
  },
  {
    id: 26,
    img: "https://www.vhv.rs/dpng/d/309-3091739_pain-from-naruto-manga-hd-png-download.png",
  },
  {
    id: 27,
    img: "https://www.vhv.rs/dpng/d/309-3091739_pain-from-naruto-manga-hd-png-download.png",
  },
  {
    id: 28,
    img: "https://www.vhv.rs/dpng/d/309-3091739_pain-from-naruto-manga-hd-png-download.png",
  },
  {
    id: 29,
    img: "https://www.vhv.rs/dpng/d/309-3091739_pain-from-naruto-manga-hd-png-download.png",
  },
  {
    id: 30,
    img: "https://www.vhv.rs/dpng/d/309-3091739_pain-from-naruto-manga-hd-png-download.png",
  },
  {
    id: 31,
    img: "https://www.vhv.rs/dpng/d/309-3091739_pain-from-naruto-manga-hd-png-download.png",
  },
  {
    id: 32,
    img: "https://www.vhv.rs/dpng/d/309-3091739_pain-from-naruto-manga-hd-png-download.png",
  },
  {
    id: 33,
    img: "https://www.vhv.rs/dpng/d/309-3091739_pain-from-naruto-manga-hd-png-download.png",
  },
  {
    id: 34,
    img: "https://www.vhv.rs/dpng/d/309-3091739_pain-from-naruto-manga-hd-png-download.png",
  },
  {
    id: 35,
    img: "https://www.vhv.rs/dpng/d/309-3091739_pain-from-naruto-manga-hd-png-download.png",
  },
  {
    id: 36,
    img: "https://www.vhv.rs/dpng/d/309-3091739_pain-from-naruto-manga-hd-png-download.png",
  },
  {
    id: 37,
    img: "https://www.vhv.rs/dpng/d/309-3091739_pain-from-naruto-manga-hd-png-download.png",
  },
  // Add more objects as needed
];

export default function Latest() {
  const [selected, setSelected] = useState(null);

  const onSelection = (index) => {
    setSelected(index);
  };

  const convertItemGrid = () => {
    const columnLength = 3;
    let result = [];
    for (let i = 0; i < list.length; i += columnLength) {
      result.push(list.slice(i, i + columnLength));
    }

    return result;
  };

  return (
    <SafeAreaView>
      <Topbar />
      <Searchbar
        style={{
          paddingRight: 20,
        }}
      />
      <FlatList
        data={convertItemGrid()}
        renderItem={({ item }) => (
          <View style={styles.rowContainer}>
            {item.map((v, i) => {
              return (
                <TouchableOpacity
                  style={styles.imageContainer}
                  onPress={() => onSelection(v.id)}
                >
                  <Image
                    source={{ uri: v.img }}
                    style={
                      selected === v.id ? styles.selectedImage : styles.image
                    }
                  />
                  {selected === v.id && (
                    <View style={styles.selectiionContainer}>
                      <TouchableOpacity style={styles.selectionIconsContainer}>
                        <Icon name="paper-plane" size={22} />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.selectionIconsContainer}>
                        <Icon name="bookmark" size={22} />
                      </TouchableOpacity>
                    </View>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        )}
        keyExtractor={(item) => item.id}
        style={styles.flatListContainer}
      />
    </SafeAreaView>
  );
}

// function SelectionOptions() {
//   return <View style={styles.selectionOptionContainer}></View>;
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  itemContainer: {
    flex: 1,
    margin: 8,
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: 100,
    height: 100,
    aspectRatio: 1, // Maintain aspect ratio of images
  },
  selectedImage: {
    width: 100,
    height: 100,
    opacity: 0.5,
  },
  rowContainer: {
    display: "flex",
    width: "auto",
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
    // justifyContent: "center",
  },
  imageContainer: {
    padding: 10,
  },
  flatListContainer: {
    height: Dimensions.get("window").height - 300,
  },
  selectiionContainer: {
    position: "absolute",
    width: 100,
    height: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  selectionIconsContainer: {
    padding: 10,
  },
});
