import { StyleSheet, Image, ScrollView } from 'react-native';

import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* About Section  */}
        <Image
          source={{
            uri: 'https://ik.imagekit.io/debajit13/profile_pic.jpeg?updatedAt=1689744597272',
          }}
          style={styles.image}
        />
        <Text style={styles.title}>👋 Hi, Welcome to my space</Text>
        <View
          style={styles.separator}
          lightColor='#eee'
          darkColor='rgba(255,255,255,0.1)'
        />
        <Text style={styles.aboutText}>
          I am Debajit, a 23 years old Software Engineer with 2+ years of
          experience. Currently, I am working at{' '}
          <Text style={styles.textBold}>P360</Text> as a{' '}
          <Text style={styles.textBold}>Software Engineer</Text>. My expertise
          is in <Text style={styles.textBold}>Frontend Web Development</Text>.
        </Text>
        <Text style={styles.aboutText}>
          Currently, I am learning NextJS. I am very active in technical
          communities. I am the{' '}
          <Text style={styles.textBold}>
            Organizer of GDG Siliguri, Ex β-MLSA, Ex Hack Club Lead, and Ex
            GSSOC Ambassador
          </Text>
          .
        </Text>

        <Text style={styles.aboutText}>
          Also, I am a <Text style={styles.textBold}>Tech Speaker</Text> too. I
          have given technical talks at many events like{' '}
          <Text style={styles.textBold}>
            GDSC WOW KOLKATA, FrontendDays Siliguri, GDG Bhopal, JWOC, Azure
            Devday, Hack Club SIT, GirlScript Siliguri, GDSC SIT, Codecademy
            Frontend Marathon
          </Text>{' '}
          and many more.
        </Text>
        <Text style={styles.aboutText}>
          I also like to participate in Hackathons and Open Source events. I won
          the <Text style={styles.textBold}>Smart India Hackathon 2020</Text>{' '}
          and contributed to{' '}
          <Text style={styles.textBold}>
            HacktoberFest 2019, HacktoberFest 2020, JWOC and GWOC
          </Text>
          . Also, I mentored a team for{' '}
          <Text style={styles.textBold}>Smart India Hackathon 2022</Text> that
          later won the Hackathon.
        </Text>

        <View>
          <Text style={styles.sectionHeading}>Skills</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 14,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 50,
    marginTop: 12,
  },
  aboutText: {
    textAlign: 'center',
    marginBottom: 13,
    width: '80%',
  },
  textBold: {
    fontWeight: 'bold',
  },
  sectionHeading: {
    marginTop: 39,
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontSize: 24,
  },
});
