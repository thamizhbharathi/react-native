import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useBatteryLevel, getPowerStateAsync } from "expo-battery";
import * as Device from "expo-device";
import { FontAwesome5 } from "@expo/vector-icons"; 

export default function BatteryCheck() {
  const [battery, setBattery] = useState(null);
  const batteryLevel = useBatteryLevel();

  useEffect(() => {
    const fetchBatteryState = async () => {
      const powerState:any = await getPowerStateAsync();
      setBattery(powerState);
    };

    fetchBatteryState();

    return () => {};
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <FontAwesome5 name="battery-full" size={24} color="#007bff" />
        <Text style={styles.text}>Battery Level: {batteryLevel * 100}%</Text>
      </View>

      {/* <View style={styles.row}>
        <FontAwesome5 name="battery" size={24} color="#007bff" />
        <Text style={styles.text}>
          Status: {battery ? battery.batteryState : "Loading..."}
        </Text>
      </View> */}

      <View style={styles.row}>
        <FontAwesome5 name="microchip" size={24} color="#007bff" />
        <Text style={styles.text}>
          {Device.manufacturer}: {Device.modelName}
        </Text>
      </View>
      <View style={styles.row}>
        <FontAwesome5 name="memory" size={24} color="#007bff" />
        <Text style={styles.text}>Memory: {Device.totalMemory}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  text: {
    marginLeft: 10,
    fontSize: 18,
  },
});
