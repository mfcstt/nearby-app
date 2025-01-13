import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  TextProps,
  ActivityIndicator,
} from "react-native";
import {IconProps as TablerIconProps} from "@tabler/icons-react-native"

import { s } from "./styles";
import { colors } from "@/styles/theme";

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean;
};

function Button({ children, isLoading = false, ...rest}: ButtonProps) {
  return (
    <TouchableOpacity style={s.container} activeOpacity={0.8} disabled={isLoading} {...rest}>
      {isLoading ? <ActivityIndicator color={colors.gray[100]} size={"small"}/> : children}
    </TouchableOpacity>
  );
}

function Title({ children }: TextProps) {
  return <Text style={s.title}>{children}</Text>;
}

type IconProps = TablerIconProps & {
    icon: React.ComponentType<TablerIconProps>;
    };

function Icon({icon: Icon}: IconProps) {
  return <Icon size={24} color={colors.gray[100]} />;
}

Button.Title = Title;
Button.Icon = Icon;
export { Button };
