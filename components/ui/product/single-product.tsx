import { Box, HStack, Image, Text, VStack } from "@gluestack-ui/themed";

import { Pressable } from "react-native";
import { ProductProps } from "./data/product-data";

export default function Product({
  id,
  price,
  title,
  imageUrl,
  createAt,
  onSubmit,
}: ProductProps) {
  return (
    <Pressable onPress={() => onSubmit(id)}>
      <Box
        borderWidth={1}
        borderColor="$trueGray300"
        dark-borderColor="$trueGray100"
        base-pl={0}
        base-pr={0}
        sm-pl={10}
        sm-pr={10}
        px={10}
        py={6}
        shadowColor="$backgroundDark100"
        mb={16}
        rounded={8}
      >
        <HStack>
          <Image
            size="md"
            source={{
              uri: imageUrl,
            }}
            borderRadius={2}
            alt={title}
          />
          <VStack ml={10}>
            <Text
              color="$coolGray800"
              fontWeight="$bold"
              $dark-color="$warmGray100"
            >
              {title}
            </Text>
            <Text color="$coolGray600" $dark-color="$warmGray200">
              {price}
            </Text>
            <Text color="$coolGray400" $dark-color="$warmGray100">
              {createAt}
            </Text>
          </VStack>
        </HStack>
      </Box>
    </Pressable>
  );
}
