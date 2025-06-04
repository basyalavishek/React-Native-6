import { View, Text, Pressable, Image } from 'react-native'

const PlaceItem = ({place}) => {
  return (
    <Pressable>
      <Image source={{uri:place.imageUri}} />
        <View>
            <Text>{place.title}</Text>
            <Text>{place.address}</Text>
        </View>
    </Pressable>
  )
}

export default PlaceItem