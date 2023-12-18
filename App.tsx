import { config } from '@gluestack-ui/config';
import { Box, GluestackUIProvider, Text } from '@gluestack-ui/themed';
import { ScrollView } from 'react-native';
import Gradient from './assets/Icons/Gradient';
import DocumentData from './assets/Icons/DocumentData';
import LightBulbPerson from './assets/Icons/LightbulbPerson';
import Rocket from './assets/Icons/Rocket';
import Logo from './assets/Icons/Logo';

import { FlatListOrderCommon } from './src/FlatListOrderCommon';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Home />
    </GluestackUIProvider>
  );
}

const Home = () => {
  // return <Container />;
  return (
    <FlatListOrderCommon
  data={data}
  />
  )
};


const Container = () => {
  return (<>
  <Box bgColor='aqua' alignItems='center' height={500} justifyContent='center'>
  <Text color='red' fontSize={30}>Hello QuangPeach</Text>
  </Box>
  </>);
};
const data = [
  {
    id: 1,
    orderCode: "100.2001.1104",
    customer: {
      id: 1,
      phoneNumber: "0967777111",
      fullName: "A Sức",
      address: "Mỹ Đình - Hà Nội",
    },
    orderTime: "2023/11/03 12:14",
    orderPrice: 18000000,
    status: "Thành công",
    listProduct: [
      {
        idProduct: 1,
        name: "BlueBerry for Eyes",
        quantity: 10,
        unit: "Hop",
        avatar:
          "https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/filters:quality(95)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04669_10519ccf63.JPG",
        totalProductPrice: 20000,
      },
      {
        idProduct: 1,
        name: "BlueBerry for Eyes",
        quantity: 10,
        unit: "Hop",
        avatar:
          "https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/filters:quality(95)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04669_10519ccf63.JPG",
        totalProductPrice: 20000,
      },
    ],
  },
  {
    id: 2,
    orderCode: "100.2001.1104",
    customer: {
      id: 2,
      phoneNumber: "096777222",
      fullName: "A Hưng",
      address: "Diễn Châu - Nghệ An",
    },

    orderTime: "2023/11/03 12:14",
    orderPrice: 8000000,
    status: "Đang giao",
    listProduct: [
      {
        idProduct: 1,
        name: "BlueBerry for Eyes",
        quantity: 10,
        unit: "Hop",
        avatar:
          "https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/filters:quality(95)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04669_10519ccf63.JPG",
        totalProductPrice: 20000,
      },
      {
        idProduct: 1,
        name: "BlueBerry for Eyes",
        quantity: 10,
        unit: "Hop",
        avatar:
          "https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/filters:quality(95)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04669_10519ccf63.JPG",
        totalProductPrice: 20000,
      },
    ],
  },
  {
    id: 4,
    orderCode: "100.2001.1104",
    customer: {
      id: 1,
      phoneNumber: "0967777111",
      fullName: "A Sức",
      address: "Mỹ Đình - Hà Nội",
    },
    orderTime: "2023/11/03 12:14",
    orderPrice: 8000000,
    status: "Đã xử lý",
    listProduct: [
      {
        idProduct: 1,
        name: "BlueBerry for Eyes",
        quantity: 10,
        unit: "Hop",
        avatar:
          "https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/filters:quality(95)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04669_10519ccf63.JPG",
        totalProductPrice: 20000,
      },
      {
        idProduct: 1,
        name: "BlueBerry for Eyes",
        quantity: 10,
        unit: "Hop",
        avatar:
          "https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/filters:quality(95)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04669_10519ccf63.JPG",
        totalProductPrice: 20000,
      },
    ],
  },
  {
    id: 5,
    orderCode: "100.2001.1104",
    customer: {
      id: 1,
      phoneNumber: "0967777111",
      fullName: "A Hưng",
      address: "Mỹ Đình - Hà Nội",
    },
    orderTime: "2023/11/03 12:14",
    orderPrice: 8000000,
    status: "Đang giao",
    listProduct: [
      {
        idProduct: 1,
        name: "BlueBerry for Eyes",
        quantity: 10,
        unit: "Hop",
        avatar:
          "https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/filters:quality(95)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04669_10519ccf63.JPG",
        totalProductPrice: 20000,
      },
      {
        idProduct: 1,
        name: "BlueBerry for Eyes",
        quantity: 10,
        unit: "Hop",
        avatar:
          "https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/filters:quality(95)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04669_10519ccf63.JPG",
        totalProductPrice: 20000,
      },
    ],
  },
  {
    id: 6,
    orderCode: "100.2001.1104",
    customer: {
      id: 1,
      phoneNumber: "0967777111",
      fullName: "A Sức",
      address: "Mỹ Đình - Hà Nội",
    },
    orderTime: "2023/11/03 12:14",
    orderPrice: 8000000,
    status: "Đã xử lý",
    listProduct: [
      {
        idProduct: 1,
        name: "BlueBerry for Eyes",
        quantity: 10,
        unit: "Hop",
        avatar:
          "https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/filters:quality(95)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04669_10519ccf63.JPG",
        totalProductPrice: 20000,
      },
      {
        idProduct: 1,
        name: "BlueBerry for Eyes",
        quantity: 10,
        unit: "Hop",
        avatar:
          "https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/filters:quality(95)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04669_10519ccf63.JPG",
        totalProductPrice: 20000,
      },
    ],
  },
  {
    id: 3,
    orderCode: "100.2001.1104",
    customer: {
      id: 1,
      phoneNumber: "0967777111",
      fullName: "A Sức",
      address: "Mỹ Đình - Hà Nội",
    },
    orderTime: "2023/11/03 12:14",
    orderPrice: 8000000,
    status: "Đã xử lý",
    listProduct: [
      {
        idProduct: 1,
        name: "BlueBerry for Eyes",
        quantity: 10,
        unit: "Hop",
        avatar:
          "https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/filters:quality(95)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04669_10519ccf63.JPG",
        totalProductPrice: 20000,
      },
      {
        idProduct: 1,
        name: "BlueBerry for Eyes",
        quantity: 10,
        unit: "Hop",
        avatar:
          "https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/filters:quality(95)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04669_10519ccf63.JPG",
        totalProductPrice: 20000,
      },
    ],
  },
];
