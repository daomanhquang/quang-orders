import {
  Box,
  Text,
  FlatList,
  ScrollView,
  VStack,
  HStack,
  Pressable,
  Icon, CalendarDaysIcon, PaperclipIcon
} from "@gluestack-ui/themed";

export const FlatListOrderCommon = () => {
  return (
    <>
      <>
        <Box
          bgColor="#004400"
          alignItems="center"
          height={100}
          justifyContent="center"
          alignContent="center"
        >
          <Text bold color="white" fontSize={20}>
            Danh sách yêu cầu
          </Text>
        </Box>
      </>
      <>
        <ScrollView bgColor="white">
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <>
                {/* <Text>{item.customer.fullName}</Text> */}
                <Pressable
                  onPress={() => {
                    alert(
                     "Chuyen den trang voi du lieu: ", <Text></Text>
                    );
                    console.log("vcl log neeeeeeeee",item.orderCode,item.customer.fullName, item.orderPrice);
                    
                  }}
                >
                  <Box
                    height={120}           // fix cung
                    borderBottomWidth="$2"
                    borderColor="$trueGray100"
                    
                  >
                    <HStack h={"100%"}>
                      <Box  sx={stylesBgc(item.status)} width={"2%"}></Box>
                      <VStack paddingHorizontal={"2%"} paddingVertical={"1%"} justifyContent="space-around" width={"98%"}>
                        <HStack
                          width={"100%"}
                          space="md"
                          justifyContent="space-between"
                        >
                          <Text bold size = {"lg"} style={styles(item.status)}>
                            {item.orderCode}
                          </Text>
                          <Text bold>{champhay(tien.format(item.orderPrice))}</Text>
                        </HStack>
                        <HStack
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <VStack>
                            <Text bold size = {"lg"}>{item.customer.fullName}</Text>
                            <HStack>
                              <Icon as={PaperclipIcon} marginRight={"5%"} size="lg" />
                              <Text color="gray">{item.customer.address}</Text>
                            </HStack>
                          </VStack>
                          <Text bold>({item.listProduct.length})</Text>
                        </HStack>
                        <HStack justifyContent="space-between">
                          <VStack>
                            <HStack>
                              <Icon as={CalendarDaysIcon} size="lg" marginRight={"5%"} ></Icon>
                              <Text>{item.orderTime}</Text>
                            </HStack>
                          </VStack>
                          <Text style={styles(item.status)} size="$3">{item.status}</Text>
                        </HStack>
                      </VStack>
                    </HStack>
                  </Box>
                </Pressable>
              </>
            )}
          />

          {/* </FlatList> */}
        </ScrollView>
      </>
    </>
  );
};

const styles = (status: string) => {
  if (status == "Đang giao") {
    return {
      color: "red",
    };
  }
  else if(status=="Đã xử lý"){
    return {
      color: "blue",
    };
  }
   else {
    return {
      color: "green",
    };
  }
};
const stylesBgc = (status: string) => {
  if (status == "Đang giao") {
    return {
      bgColor: "red",
    };
  } else if (status == "Đã xử lý") {
    return {
      bgColor: "blue",
    };
  } else {
    return {
      bgColor: "green",
    };
  }
};

const tien = Intl.NumberFormat('vi-VN',{
  // style:"current",
  // currency:'VND'
})
function champhay(chuoi:string){
   return chuoi.replaceAll(".",",");
  
}

// const data=this.props?.data

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
