import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useRef} from 'react';
import {Platform} from 'react-native';
import Container from 'src/Components/Container/Container';
import {MainStackParamList} from 'src/Navigation/StackNavigators/MainStackNavigator';
import PSPDFKitView from 'react-native-pspdfkit';

function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainStackParamList, 'Home'>>();
  const pdfRef = useRef();
  pdfRef?.current?.setToolbarMenuItems([
    'annotationButtonItem',
    'searchButtonItem',
    'thumbnailsButtonItem',
  ]);
  return (
    <Container variant={'background'}>
      <PSPDFKitView
        ref={pdfRef}
        document={
          Platform.OS === 'ios'
            ? 'Document.pdf'
            : 'file:///android_asset/Document.pdf'
        }
        configuration={{
          allowToolbarTitleChange: false,
          toolbarTitle: 'My Awesome Report',
          backgroundColor: 'yellow',
          useParentNavigationBar: true,
          androidShowSearchAction: true,
          androidShowOutlineAction: true,
          androidShowBookmarksAction: true,
          androidShowShareAction: true,
          androidShowPrintAction: true,
          androidShowDocumentInfoView: true,
          androidShowSettingsMenu: true,
          androidShowAnnotationListAction: true,
        }}
        // Only for Android.
        toolbarMenuItems={[
          'annotationButtonItem',
          'searchButtonItem',
          'thumbnailsButtonItem',
        ]}
        fragmentTag="PDF1"
        showNavigationButtonInToolbar={true}
        //onNavigationButtonClicked={() => navigation.goBack()}
        style={{flex: 1}}
      />
    </Container>
  );
}

export default HomeScreen;
