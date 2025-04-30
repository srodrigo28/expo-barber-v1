import { StyleSheet, Text, TextInput, View, 
    Pressable, Image, } from "react-native";
import { IoCutSharp } from "react-icons/io5";
import { GiHamburgerMenu, GiRazorBlade } from "react-icons/gi";
import { IoSearch } from "react-icons/io5";
import { TbMoustache } from "react-icons/tb";
import colors from "../../constants/Colors";
import React from "react";
import { FaStar } from "react-icons/fa";

export default function Home() {
  return (
    <View style={styles.container}>
      {/* HEADER TOP */}
      <View style={styles.header}>
        <View style={styles.logo}>
          <IoCutSharp style={styles.cutLogo} />
          <Text style={styles.cutText}>SHOP</Text>
          <Text style={styles.cutText1}>BARBER</Text>
        </View>
        <Pressable style={styles.btnHeader}>
          <GiHamburgerMenu size={30} color="white" />
        </Pressable>
      </View>

      {/* HEADER TOP */}
      <View style={styles.searchContainer}>
        <Text style={styles.searchText}>Olá, Antônio!</Text>
        <Text style={styles.searchText1}>Qui, 24 de Abril</Text>

        <View style={styles.searchImputContainer}>
          <TextInput
            style={styles.searchImput}
            placeholder="Buscar"
            placeholderTextColor="gray"
          />
          <Pressable style={styles.btnSearch}>
            <IoSearch size={30} color="white" />
          </Pressable>
        </View>
      </View>

      {/* Categorias */}
      <View style={styles.specialty}>
        <View style={styles.specialtyText}>
          <IoCutSharp size={22} color="white" />
          <Text style={styles.specialtyText1}>Cabelo</Text>
        </View>
        <View style={styles.specialtyText}>
          <TbMoustache size={22} color="white" />
          <Text style={styles.specialtyText1}>Barba</Text>
        </View>
        <View style={styles.specialtyText}>
          <GiRazorBlade size={22} color="white" />
          <Text style={styles.specialtyText1}>Acabamento</Text>
        </View>
      </View>

      {/* Banner */}
      <Image
        source={require(`../../assets/images/barber/banner.png`)}
        style={styles.imageBanner}
      />

      <Text>Agendamentos</Text>
      
      {/* Card Container */}
      <View style={styles.Card}>
        <View style={styles.cardItem}>
          <View style={styles.cardItemImage}>
            <Image
              source={require(`../../assets/images/barber/cards/20.png`)}
              style={styles.image}
            />
            <View style={styles.cardItemStar}>
              <FaStar style={styles.itemStar} />
              <Text style={{ color: colors.white }}>5.0</Text>
            </View>
          </View>

          <View style={styles.cardItemDescription}>
            <Text style={styles.cardItemTitulo}>Barber Vinkins II</Text>
            <Text style={styles.cardItemAdress}>Rua Paulista N. 22</Text>
          </View>

          <Pressable style={styles.btn}>
            <Text style={styles.btnText}>Reservar</Text>
          </Pressable>
        </View>

        <View style={styles.cardItem}>
          <View style={styles.cardItemImage}>
            <Image
              source={require(`../../assets/images/barber/cards/19.png`)}
              style={styles.image}
            />
            <View style={styles.cardItemStar}>
              <FaStar style={styles.itemStar} />
              <Text style={{ color: colors.white }}>5.0</Text>
            </View>
          </View>

          <View style={styles.cardItemDescription}>
            <Text style={styles.cardItemTitulo}>Barber Vinkins II</Text>
            <Text style={styles.cardItemAdress}>Rua Paulista N. 22</Text>
          </View>

          <Pressable style={styles.btn}>
            <Text style={styles.btnText}>Reservar</Text>
          </Pressable>
        </View>

        <View style={styles.cardItem}>
          <View style={styles.cardItemImage}>
            <Image
              source={require(`../../assets/images/barber/cards/01.png`)}
              style={styles.image}
            />
            <View style={styles.cardItemStar}>
              <FaStar style={styles.itemStar} />
              <Text style={{ color: colors.white }}>5.0</Text>
            </View>
          </View>

          <View style={styles.cardItemDescription}>
            <Text style={styles.cardItemTitulo}>Barber Vinkins II</Text>
            <Text style={styles.cardItemAdress}>Rua Paulista N. 22</Text>
          </View>

          <Pressable style={styles.btn}>
            <Text style={styles.btnText}>Reservar</Text>
          </Pressable>
        </View>

        <View style={styles.cardItem}>
          <View style={styles.cardItemImage}>
            <Image
              source={require(`../../assets/images/barber/cards/02.png`)}
              style={styles.image}
            />
            <View style={styles.cardItemStar}>
              <FaStar style={styles.itemStar} />
              <Text style={{ color: colors.white }}>5.0</Text>
            </View>
          </View>

          <View style={styles.cardItemDescription}>
            <Text style={styles.cardItemTitulo}>Barber Vinkins II</Text>
            <Text style={styles.cardItemAdress}>Rua Paulista N. 22</Text>
          </View>

          <Pressable style={styles.btn}>
            <Text style={styles.btnText}>Reservar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

{/* Iniciando Estilizações */}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    flex: 1,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: colors.black,
  },
  header: {
    top: 0,
    position: "sticky",
    width: "100%",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#1d1d1d",
  },
  logo: {
    flexDirection: "row",
    alignItems: "center",
  },
  cutLogo: {
    width: 30,
    height: 30,
    color: colors.purpleEspecial,
  },
  cutText: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.purpleEspecial,
  },
  cutText1: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.white,
  },
  btnHeader: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.black,
  },
  searchContainer: {
    width: "100%",
    padding: 20,
  },
  searchText: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.white,
  },
  searchText1: {
    fontSize: 12,
    color: colors.white,
  },
  searchImputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  searchImput: {
    width: "90%",
    padding: 9,
    fontSize: 20,
    borderRadius: 10,
    letterSpacing: 2,
    backgroundColor: colors.grayEspecial1,
  },
  btnSearch: {
    padding: 6,
    marginLeft: 10,
    borderRadius: 10,
    backgroundColor: colors.purpleEspecial,
  },
  specialty: {
    padding: 20,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  specialtyText: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: colors.grayEspecial1,
  },
  specialtyText1: {
    paddingLeft: 5,
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 1,
    color: colors.white,
  },
  image: {
    width: "100%",
    height: 160,
    maxWidth: 500,
    borderRadius: 20,
    alignItems: "center",
  },
  imageBanner: {
    width: "90%",
    maxWidth: 500,
    paddingHorizontal: 20,
  },

  //Estilizando card
  Card: {
    gap: 10,
    height: 600,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 20,
    justifyContent: "space-around",
  },
  CardItem: {
    width: "45%",
  },

  cardItem: {
    width: 160,
    height: 240,
  },
  cardItemImage: {
    width: 160,
    height: 120,
  },
  cardItemStar: {
    width: 60,
    top: 7,
    left: 5,
    padding: 6,
    borderRadius: 10,
    position: "absolute",
    flexDirection: "row",
    gap: 5,
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    backgroundColor: colors.purpleTransaparent1,
  },
  itemStar: {
    color: colors.purpleEspecial,
  },
  cardItemDescription: {
    marginTop: 45,
  },
  cardItemTitulo: {
    fontSize: 18,
    color: colors.gray,
  },
  cardItemAdress: {
    color: colors.grayEspecial3,
  },
  cardItemViews: {
    color: colors.grayEspecial3,
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
    backgroundColor: colors.blackSecondary,

    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: colors.white,
  },
});