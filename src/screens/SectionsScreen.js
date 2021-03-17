import React from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useState} from 'react';
import {Ionicons} from '@expo/vector-icons';
import {setSections as setPersistedSections} from '../redux/reducer';
import useTheme from '../hooks/useTheme';

function SectionsScreen() {
  const [theme] = useTheme();
  const persistedSections = useSelector((state) => state.sections);

  const [sections, setSections] = useState(persistedSections);
  const dispatch = useDispatch();

  useEffect(
    () => () => {
      dispatch(setPersistedSections(sections));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dispatch],
  );

  useEffect(() => {
    // console.log(sections);

    if (sections.length > 0) {
      return;
    }

    fetch(
      'https://content.guardianapis.com/sections?api-key=743c0667-8a7b-4eb9-aca4-d234e1bfcae8',
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const fetchedSections = json.response.results.map((s) => {
          return {id: s.id, name: s.webTitle};
        });
        console.log(fetchedSections);
        sections.push(...fetchedSections);
        setSections(fetchedSections);
      });
  }, [sections, dispatch]);

  return (
    <View
      style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <FlatList
        data={sections}
        contentContainerStyle={styles.listContentContainer}
        keyExtractor={(item) => item.id}
        renderItem={({item, index}) => (
          <View style={styles.sectionContainer}>
            <Text style={[styles.sectionName, {color: theme.colors.text}]}>
              {item.name}
            </Text>
            <View style={styles.iconsContainer}>
              <TouchableOpacity
                onPress={() => {
                  sections[index].isVisible = !sections[index].isVisible;
                  setSections([...sections]);
                }}>
                <Ionicons
                  color={theme.colors.secondaryText}
                  size={30}
                  name={item.isVisible ? 'md-eye' : 'md-eye-off'}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  // dispatch(toggleSectionFollowed(item.id));
                  sections[index].isFollowed = !sections[index].isFollowed;
                  setSections([...sections]);
                }}>
                <Ionicons
                  color="gold"
                  size={30}
                  name={item.isFollowed ? 'ios-star' : 'ios-star-outline'}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContentContainer: {
    paddingVertical: 12,
  },
  sectionContainer: {
    flexDirection: 'row',
    height: 48,
    alignItems: 'center',
    marginHorizontal: 16,
  },
  sectionName: {
    paddingHorizontal: 8,
    fontSize: 18,
    flex: 1,
  },
  iconsContainer: {
    width: 72,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default SectionsScreen;
