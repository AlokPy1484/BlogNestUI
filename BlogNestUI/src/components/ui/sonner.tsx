import { Toaster as Sonner } from "sonner";
import { useTheme } from "next-themes";

interface ToasterProps {
  richColors?: boolean;
}

const Toaster = ({ richColors = true }: ToasterProps) => {
  const { theme } = useTheme();
  const validTheme =
    theme === "light" || theme === "dark" || theme === "system"
      ? theme
      : "system";

  return <Sonner theme={validTheme} richColors={richColors} />;
};

export default Toaster;
