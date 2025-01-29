
import { StyleSheet, Text, } from 'react-native';


type SectionHeaderProps = {
  title: string;
};

// Component for rendering a section header
const GrocerySectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return <Text style={styles.sectionHeader}>{title}</Text>;
};

export default GrocerySectionHeader

const styles = StyleSheet.create({
  sectionList: {
    width: '100%',
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  item: {
    fontSize: 16,
    color: '#333',
  },
  action: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '100%',
  },
  greenAction: {
    backgroundColor: 'green',
  },
  redAction: {
    backgroundColor: 'red',
  },
  actionText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});