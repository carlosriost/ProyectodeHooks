import React, {useState, useEffect, use} from 'react';
import {View, Text, ScrollView, Alert, Image, KeyboardAvoidingView, Platform, RefreshControl} from 'react-native';
import {Card, TextInput, Button} from 'react-native-paper'; 
import styles from '../Styles/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const ProfileList = ({navigation}) => {
    const [profiles, setProfiles] = useState([]);
    const [profileFilter, setProfileFilter] = useState([]);
    const [loading, setLoading] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const [selectProfile, setSelectProfile] = useState();

    const useAsyncStorage = (key) => {
       
       
        const getData = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem(key);
                return jsonValue != null ? JSON.parse(jsonValue) : null;
            } catch (e) {
                console.log("error cargando la informacion", e);
            }
        } //este cierra el getData

        const storeData = async (value) => {
            try {
                const jsonValue = JSON.stringify(value);
                await AsyncStorage.setItem(key, jsonValue);
                return true;
            } catch (e) {
                console.log("error guardando la informacion", e);
                return false;
            }
        } //este cierra el storeData

        const removeData = async () => {
            try {
                await AsyncStorage.removeItem(key);
                return true;
            } catch (e) {
                console.log("error eliminando la informacion", e);
                return false;
            }//este cierra el removeData
        }


            return {getData, storeData, removeData};


    }//esta llave cierra useAsyncStorage


    useEffect(() => {

        loadProfiles()


    },[]); //esta llave cierra el useEffect




} // este cierra la app

export default ProfileList;