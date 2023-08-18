export type RootStackParamList = {
  Home: { loggedIn: boolean };
  PinLobby: { code: number };
  DualGame: { selfNickname: string; otherNickname: string };
  DualWinning: { winner: string };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
