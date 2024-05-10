import React, { useState, useEffect } from "react";
import { View, Text, Button, FlatList } from "react-native";

const API_URL = "https://jsonplaceholder.typicode.com/photos";

const ApiCall = () => {
  const [callCount, setCallCount] = useState(0);
  const [responseData, setResponseData] = useState([]);

  const incrementCallCount = () => {
    setCallCount(callCount + 1);
  };

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      if (response.ok) {
        const data = await response.json();
        setResponseData(data);
        incrementCallCount();
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Text>API Call Count: {callCount}</Text>
        <Button title="Make API Call" onPress={fetchData} />
      </View>
      <FlatList
        style={{ marginTop: 20 }}
        data={responseData}
        keyExtractor={(item:any) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <Text>Title: {item.title}</Text>
            <Text>URL: {item.url}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ApiCall;
