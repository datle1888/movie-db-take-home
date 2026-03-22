import { Pressable, Text, View } from 'react-native';
import styles from './DropdownSelector.styles';

export type DropdownOption<T extends string> = {
  label: string;
  value: T;
};

type DropdownSelectorProps<T extends string> = {
  label: string;
  isOpen: boolean;
  options: Array<DropdownOption<T>>;
  selectedValue: T;
  onToggle: () => void;
  onSelect: (value: T) => void;
};

export default function DropdownSelector<T extends string>({
  label,
  isOpen,
  options,
  selectedValue,
  onToggle,
  onSelect,
}: DropdownSelectorProps<T>) {
  return (
    <View style={styles.wrapper}>
      <Pressable style={styles.trigger} onPress={onToggle}>
        <Text style={styles.triggerLabel}>{label}</Text>
        <Text style={styles.triggerArrow}>{isOpen ? '⌄' : '›'}</Text>
      </Pressable>

      {isOpen ? (
        <View style={styles.menu}>
          {options.map((option, index) => {
            const isSelected = option.value === selectedValue;
            const isLastItem = index === options.length - 1;

            return (
              <Pressable
                key={option.value}
                style={[
                  styles.optionButton,
                  isSelected ? styles.selectedOptionButton : null,
                  isLastItem ? styles.lastOptionButton : null,
                ]}
                onPress={() => onSelect(option.value)}
              >
                <Text
                  style={[
                    styles.optionLabel,
                    isSelected ? styles.selectedOptionLabel : null,
                  ]}
                >
                  {option.label}
                </Text>
              </Pressable>
            );
          })}
        </View>
      ) : null}
    </View>
  );
}
