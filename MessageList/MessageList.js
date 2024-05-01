import { FlatList, View } from "react-native"
import DATA from '../DATA';
import { Message } from "../Message/Message"



export const MessageList = () => {
    return (
        <View style={{ width: "90%", padding:10 }}>
            <FlatList
                data={DATA}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Message
                        name={item.name}
                        avatar={item.avatar}
                        lastMessage={item.lastMessage}
                        unreadCount={item.unreadCount}
                        online={item.online}
                    />
                )}
            />

        </View>
    )
}