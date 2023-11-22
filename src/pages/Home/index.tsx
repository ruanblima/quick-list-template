import { StatusBar, Text } from 'react-native';

import * as S from './styles';

export function Home() {
  return (
    <S.Container>
      <StatusBar />
      <Text>Olá</Text>
    </S.Container>
  );
}
