import { View } from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { Center, Heading } from "@gluestack-ui/themed";
import { DimensionValue } from "react-native";

interface ScreenLayoutProps {
  children: React.ReactNode;
  padding: DimensionValue;
  header?: string; // Optional prop to override default header content
}

export function ScreenLayout({
  children,
  padding = 10,
  header = "This is Header",
}: ScreenLayoutProps) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        flex={1}
        px={padding}
        bg="$backgroundLight"
        $dark-bg="$backgroundDark"
      >
        <Center mb={8}>
          <Heading>{header}</Heading>
        </Center>
        {children}
      </View>
    </SafeAreaView>
  );
}
