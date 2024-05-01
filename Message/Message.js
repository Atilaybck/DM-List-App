import { View, Image, Text } from "react-native"

export const Message = ({ name, avatar, lastMessage, unreadCount, online }) => {
    return (
        <View style={{
            width: "100%",
            height: 80,
            flexDirection: "row",
            margin: 2,
            padding: 2,
            borderBottomWidth:1,
            borderBottomColor: "#E0E0E0"
        }}
        >

            <View style={{ flex: 1 }}>
                <Image
                    style={{
                        width: 70,
                        height: 70,
                        borderRadius: 40,
                        borderWidth: 2,
                        borderColor: "#4732B1"
                    }}
                    source={avatar}
                />
                {
                    online && (
                        <View style={{
                            width: 10,
                            height: 10,
                            borderRadius: 5,
                            backgroundColor: "#1ECB83",
                            position: "absolute",
                            bottom: 12,
                            right: 5,
                        }}>
                        </View>
                    )
                }
            </View>
            <View style={{ flex: 3, justifyContent: "center", paddingLeft: 10 }}>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>{name}</Text>
                <Text style={{ fontSize: 13, color: "gray" }}>{lastMessage}</Text>
            </View>
            <View style={{ flex: 1 }}>
                {unreadCount > 0 && (
                    <View
                        style={{
                            backgroundColor: "#FF8484",
                            width: 30,
                            height: 30,
                            borderRadius: 15,
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: 3
                        }}>
                        <Text style={{ color: "white", fontSize: 12, fontWeight: "bold" }}>{unreadCount}</Text>
                    </View>
                )

                }
            </View>

        </View>
    )
}