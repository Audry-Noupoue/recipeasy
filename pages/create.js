import PageContainer from '../components/PageContainer.js';
import Button from '../components/Button.js';
import Input from '../components/Input.js';

export default function Create({ navigation }) {
   function handleCreate() {
    console.log("Create");
    navigation.navigate('Liste');
  }
  return (
    <PageContainer>

      <Input
      title = "Username"
      />

      <Input
        title = "Password"
      />

      <Input
        title = "Password confirmation"
      />
      <Button
        title="Create my account"
        onPress={handleCreate}
      />
  

    </PageContainer>
  );
}