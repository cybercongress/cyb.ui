import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  Heading,
  Pane,
  Text,
  TextInput,
  Tablist,
  Tab,
  Table as TableEv,
  Pill,
  Tooltip,
  Card,
  Icon,
  IconButton,
  Textarea,
  FilePicker,
  Popover,
  Menu,
  Dialog,
} from "evergreen-ui";

import Title from "./components/Title/Title";

import { Container } from "./components/CallToAction";
import { LinkHash } from "./components/LinkHash";
import { Message } from "./components/Message";
import { FormControl } from "./components/FormControl/FormControl";
import { Input, Select } from "./components/Input/Input";
import {
  FlexContainerLeft,
  FlexContainerRight,
  FlexContainer,
} from "./components/DbHeader/DbHeader";
import { DbMenu } from "./components/DbMenu/DbMenu";
import {
  MenuPopup,
  MenuPopupItem,
  MenuSeparator,
  MenuPopupDeleteIcon,
  MenuPopupEditIcon,
  MenuPopupTransferIcon,
  MenuPopupPauseIcon,
  MenuPopupResumeIcon,
  MenuPopupAccountIcon,
} from "./components/MenuPopup/MenuPopup";
import {
  Popup,
  PopupContent,
  PopupFooter,
  PopupTitle,
  PopupSkillBar,
  PopupBar,
  PopupBarFooter,
  ToolTip,
} from "./components/Popup/Popup";

import {
  StructureContainer,
  Structure,
  StructureList,
  Struct,
} from "./components/Structure/Structure";
import { DarkPanel } from "./components/DarkPanel/DarkPanel";
import { ProgressBar } from "./components/ProgressBar/ProgressBar";
import CircleLable from "./components/ProgressBar/CricleLable";
import {
  HomeTable,
  TableRow,
  TableItem,
  TableAddRow,
  TableRegistry,
  TableItemBen,
} from "./components/Table/Table";
import { Checkbox } from "./components/Checkbox/index";
import {
  AddNewRecordButton,
  Button as ButtonOld,
  FooterButton,
} from "./components/Button/button";
import FormField from "./components/FormField/FormFild";
import ValueInput from "./components/ValueInput";
import { TableRecords } from "./components/TableRecords/TableRecords";
import {
  ContentLine,
  ContentLineTextInput,
  LineControl,
  ContentInput,
  LineTitle,
  ContentLineFund,
} from "./components/PopupContent/PopupContent";
import { DatabaseItemsContainer } from "./components/DatabaseTable/DatabaseItemsContainer";
import { DbMenuPoints } from "./components/DbMenuPoints/DbMenuPoints";
import { Battery } from "./components/Battery/Battery";
import { SearchItem } from "./components/SearchItem/SearchItem";

import {
  Browser,
  BrowserHeader,
  BrowserContent,
  BrowserSidebar,
} from "./components/browser/Browser";

import { calculateBensShares } from "./components/utils/utils";
import { InfoButton } from "./components/DatabaseItem/index";

import { RemoveButton, AddButton } from "./components/Button/tableButton";

import StatusBar from "./components/StatusBar";
import { LinkContainer } from "./components/LinkContainer/LinkContainer";
import { Vitalick } from "./components/Vitalick/vitalick";

import Code from "./components/SolidityHighlight";
import { Status } from "./components/Popup/status";
import {
  IconLinks,
  IconCIDs,
  IconAccounts,
  IconBlockHeight,
  IconBlockDelay,
} from "./components/Icons/Icons";

import { Panel } from "./components/Panel/Panel";
import { SideBar } from "./components/SideBar/SideBar";
import { FieldsTable } from "./components/FieldsTable/FieldsTable";
import { Content } from "./components/Content/Content";
import { PageTitle } from "./components/PageTitle/PageTitle";
import { ContainerRegister } from "./components/ContainerRegister/ContainerRegister";
import { Control } from "./components/Control/Control";

import { Container as MainContainer } from "./components/Container/Container";
import {
  Section,
  SectionTabs,
  SectionContent,
} from "./components/Section/Section";
import { TotalCost } from "./components/TotalCost/TotalCost";
import { Badge } from "./components/Badge/Badge";
import { CentredPanel } from "./components/CentredPanel/CentredPanel";
import { FundContainer } from "./components/FundContainer/FundContainer";

import CybLink from "./components/CybLink/CybLink";
import { Table } from "./components/TableCybLink/Table";
import { Block, BlockRow, Row } from "./components/Block/Block";
import { SettingLabel, SettingRow } from "./components/Block/Settings";

import {
  AccountCard,
  AccountCardLeft,
  AccountCardRight,
  AccountCardContent,
  AccountCardContentItem,
  MainIndecator,
  CreateButtonContainer,
} from "./components/AccountCard/AccountCard";

import { Avatar } from "./components/Avatar/Avatar";
import { AddAccount } from "./components/Wallet/AddAccount";
import { SendFunds } from "./components/Wallet/SendFunds";
import {
  WalletLauout,
  WalletSidebar,
  WalletContent,
} from "./components/Wallet/WalletLauout/WalletLauout";
import {
  WalletTabs,
  WalletTab,
} from "./components/Wallet/WalletTabs/WalletTabs";
import { Hash } from "./components/TxQueue/TxQueue";

import {
  Home,
  Items,
  Item,
  ItemTitle,
  Image,
  Arrow,
  LinkList,
  LinkItem,
} from "./components/Home/Home";

import JsonView from "./components/JsonView/JsonView";
import ScrollContainer from "./components/ScrollContainer/ScrollContainer";
import App, { AppHeader, AppContent, AppSideBar } from "./components/App/App";

import Navigation, {
  NavigationLeft,
  NavigationRight,
  NavigationCenter,
  MenuButton,
} from "./components/Application/Navigation/Navigation";

import Indicator, {
  SettingsIndicator,
  StatusContainer,
} from "./components/Indicator/Indicator";

import NotFound from "./components/NotFound/NotFound";

import MenuContainer, {
  Bookmarks,
  LogoLink,
  AddMenuItem,
  AddMenuItemReject,
  ReportLinkContainer,
  AddMenuItemContainer,
} from "./components/Application/AppMenu/AppMenu";

import IdBarComponent, {
  SettingsLink,
  NotificationLink,
  CurrentUser,
} from "./components/Application/IdBar/IdBar";

import SearchInput, {
  BackButton,
  ForwardButton,
  NavigationContainer,
  FavoriteButton,
  FavoriteButtonContainer,
  SearchIcon,
} from "./components/Application/SearchInput/SearchInput";

import {
  ConfirmationPopup,
  Address,
  ConfirmationPopupContent,
  PopupLabel,
  TxDetailsContainer,
  ConfirmationPopupButtons,
} from "./components/Application/ConfirmationPopup/ConfirmationPopup";
import LoginContainer from "./components/Application/LoginContainer/LoginContainer";

import BrowserWindow, {
  BrowserContainer,
  Loading,
} from "./components/BrowserWindow/BrowserWindow";

import NotFoundPage from "./components/NotFound/NotFound";

import {
  SuccessfulLogin,
  FailLogin,
  GCyb,
  BntGroup,
  PaneBalance,
  HelloCardAccaunt,
  HelloContainer,
  HelloContainerLeftCol,
  HelloContainerRightCol,
  HelloContainerRightColContent,
  HelloContainerRightColBtn,
  BigImg,
  SlallImgText,
  ButtonEverGreen,
  TextIlineBlock,
  TextAreaImportMnemonic,
  TerminalCyb,
  ConnectionTable,
  StateCybTable,
  TextInputError,
  Eth,
} from "./components/Application/Hello/hello.cyb";

import {
  ThatYouSlave,
  WelcomeNewWorld,
  MatrixEverywhere,
  LastChance,
  GeneratedSecure,
  ConnectionPages,
  SecurityImportSettingsPages,
  SecurityCreatePasswordPages,
  StartCybPages,
  CardWalletPages,
  CardWalletPagesBackUpMnemonic,
  ImportAccountPages,
  ImportAccountShowMnemonic,
  GetOffTheMatrix,
  UserChoice,
} from "./components/Application/hello.cyb";

import {
  FollowYourWeb3,
  IdCyb,
  KeysCyb,
  ConnectCyb,
  ShieldCyb,
  StateCyb,
} from "./components/Application/id";

import { CardHover } from "./components/CardHover/CardHover";
import { CardAccount } from "./components/CardAccount/CardAccount";
import { Dynamics } from "./components/Dynamics/Dynamics";

import ActionBar from "./components/ActionBar/ActionBar";

import Button from "./components/Button/ButtonNew";
import Rank from "./components/SearchItem/components/rank";

export {
  Title,
  Badge,
  FooterButton,
  ButtonOld,
  Container,
  Section,
  SectionTabs,
  SectionContent,
  MainContainer,
  FundContainer,
  LinkHash,
  // Centred,
  CentredPanel,
  TotalCost,
  Message,
  TableRecords,
  Content,
  ContainerRegister,
  SideBar,
  FieldsTable,
  Panel,
  Control,
  PageTitle,
  RemoveButton,
  AddButton,
  StatusBar,
  Code,
  FormControl,
  // Input,
  Select,
  Checkbox,
  AddNewRecordButton,
  MenuPopupEditIcon,
  Battery,
  Browser,
  BrowserHeader,
  BrowserContent,
  BrowserSidebar,
  FlexContainerLeft,
  FlexContainerRight,
  FlexContainer,
  DbMenu,
  MenuPopup,
  MenuPopupItem,
  MenuSeparator,
  MenuPopupDeleteIcon,
  MenuPopupTransferIcon,
  MenuPopupPauseIcon,
  MenuPopupResumeIcon,
  MenuPopupAccountIcon,
  Popup,
  PopupContent,
  PopupFooter,
  PopupTitle,
  PopupSkillBar,
  PopupBar,
  PopupBarFooter,
  StructureContainer,
  Structure,
  StructureList,
  Struct,
  DarkPanel,
  ProgressBar,
  CircleLable,
  //Table,
  HomeTable,
  TableRow,
  TableItem,
  TableAddRow,
  TableItemBen,
  TableRegistry,
  ContentLine,
  ContentLineTextInput,
  LineControl,
  ContentInput,
  LineTitle,
  ContentLineFund,
  FormField,
  ValueInput,
  DatabaseItemsContainer,
  DbMenuPoints,
  calculateBensShares,
  InfoButton,
  SearchItem,
  LinkContainer,
  Vitalick,
  IconLinks,
  IconCIDs,
  IconAccounts,
  IconBlockHeight,
  IconBlockDelay,
  Input,
  Status,
  CybLink,
  Table,
  Block,
  BlockRow,
  Row,
  AccountCard,
  AccountCardLeft,
  AccountCardRight,
  AccountCardContent,
  AccountCardContentItem,
  MainIndecator,
  CreateButtonContainer,
  Avatar,
  AddAccount,
  SendFunds,
  WalletTabs,
  WalletTab,
  WalletLauout,
  WalletSidebar,
  WalletContent,
  Hash,
  Home,
  Items,
  Item,
  ItemTitle,
  Image,
  Arrow,
  LinkList,
  LinkItem,
  JsonView,
  ScrollContainer,
  App,
  AppHeader,
  AppContent,
  AppSideBar,
  Navigation,
  NavigationLeft,
  NavigationRight,
  NavigationCenter,
  MenuButton,
  Indicator,
  SettingsIndicator,
  StatusContainer,
  NotFound,
  MenuContainer,
  Bookmarks,
  LogoLink,
  AddMenuItem,
  AddMenuItemReject,
  ReportLinkContainer,
  AddMenuItemContainer,
  IdBarComponent,
  SettingsLink,
  CurrentUser,
  NotificationLink,
  SearchInput,
  BackButton,
  ForwardButton,
  NavigationContainer,
  FavoriteButton,
  FavoriteButtonContainer,
  SearchIcon,
  ConfirmationPopup,
  Address,
  ConfirmationPopupContent,
  PopupLabel,
  TxDetailsContainer,
  ConfirmationPopupButtons,
  SettingLabel,
  SettingRow,
  LoginContainer,
  BrowserWindow,
  BrowserContainer,
  Loading,
  NotFoundPage,
  ThatYouSlave,
  WelcomeNewWorld,
  MatrixEverywhere,
  LastChance,
  GeneratedSecure,
  ConnectionPages,
  SecurityImportSettingsPages,
  SecurityCreatePasswordPages,
  StartCybPages,
  CardWalletPages,
  CardWalletPagesBackUpMnemonic,
  ImportAccountPages,
  ImportAccountShowMnemonic,
  GetOffTheMatrix,
  UserChoice,
  FollowYourWeb3,
  IdCyb,
  KeysCyb,
  ConnectCyb,
  ShieldCyb,
  // RootCyb,
  // TxCyb,
  // PathCyb,
  // PinsCyb,
  StateCyb,
  SuccessfulLogin,
  FailLogin,
  ToolTip,
  Eth,
  GCyb,
  BntGroup,
  PaneBalance,
  HelloCardAccaunt,
  HelloContainer,
  HelloContainerLeftCol,
  HelloContainerRightCol,
  HelloContainerRightColContent,
  HelloContainerRightColBtn,
  BigImg,
  SlallImgText,
  ButtonEverGreen,
  TextIlineBlock,
  TextAreaImportMnemonic,
  TerminalCyb,
  ConnectionTable,
  StateCybTable,
  TextInputError,
  CardHover,
  CardAccount,
  Heading,
  Pane,
  Button,
  Text,
  TextInput,
  Tablist,
  Tab,
  TableEv,
  Pill,
  Tooltip,
  Card,
  Icon,
  IconButton,
  Textarea,
  FilePicker,
  Popover,
  Dialog,
  Menu,
  Dynamics,
  ActionBar,
  Rank,
};
