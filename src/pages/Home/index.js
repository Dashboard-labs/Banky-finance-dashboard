import { Avatar, Box, Button, ButtonGroup, Collapse, Flex, Icon, IconButton, LinkBox, LinkOverlay, Stack, Text, useBoolean, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import CreditCard from '../../component/credit-card';
import Profile from '../../component/layout/Header/profile';
import SearchBar from '../../component/layout/Header/search_bar';
import Sidebar from '../../component/layout/sidebar';
import { IoWater } from 'react-icons/io5';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { NavItem } from '../../component/layout/sidebar/nav-item';
import { BsCreditCard, BsPencil, BsThreeDots } from 'react-icons/bs';
import HomeDashboardChart from '../../component/Chart/Home-chart';
import img1 from '../../img/img1.svg';
import img2 from '../../img/img2.svg';
import img3 from '../../img/img3.svg';
import { AiOutlineDelete } from 'react-icons/ai';



const TransactionItem = ({ date, transaction, cid }) => {
    const [isSubMenuOpen, setSubMenuOpen] = useBoolean(true);

    const transactionsIcon = [{
        icon: IoWater,
        keywords: 'water',
        bg_color: '#3629B7'
    }, {
        icon: () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.36734 9.68199V10.9787C8.83934 10.8987 9.07534 10.694 9.07534 10.364C9.07534 10.0127 8.68867 9.82933 8.36734 9.68199Z" fill="white" /> <path d="M6.98203 7.20333C6.98203 7.57133 7.31469 7.736 7.65403 7.88533V6.66133C7.20603 6.72733 6.98203 6.908 6.98203 7.20333Z" fill="white" /><path d="M12 2L10 0L8.00001 2L6.00001 0L4.00001 2L1.33334 0V15.3333C1.33334 15.702 1.63201 16 2.00001 16H14C14.368 16 14.6667 15.702 14.6667 15.3333V0L12 2ZM8.36734 12.2187V13.2867H7.65401V12.24C6.80668 12.2227 6.06334 12.0733 5.42468 11.792V10.4173C6.02468 10.714 6.97668 10.974 7.65401 11.016V9.40133C6.46134 8.93867 5.41468 8.49 5.41468 7.20333C5.41468 6.03467 6.48668 5.48533 7.65401 5.37V4.57267H8.36734V5.34867C9.16201 5.38333 9.88134 5.54333 10.5233 5.828L10.034 7.04667C9.49268 6.82467 8.93668 6.68933 8.36734 6.64067V8.17733C9.63268 8.664 10.6433 9.10733 10.6433 10.2867C10.6433 11.53 9.61068 12.1047 8.36734 12.2187Z" fill="white" />
        </svg>,
        keywords: 'income',
        bg_color: '#FF4267',
    }, {
        icon: () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.27601 10.6667L9.60935 9.33335L8.66668 8.39069L7.33335 9.72402L6.27601 8.66669L7.60935 7.33335L6.66668 6.39069L5.33335 7.72402L4.44735 6.83869C4.32233 6.71371 4.15279 6.64349 3.97601 6.64349C3.79924 6.64349 3.6297 6.71371 3.50468 6.83869L2.50468 7.83869C1.83598 8.5065 1.42585 9.38987 1.34724 10.3317C1.26862 11.2734 1.52662 12.2126 2.07535 12.982L0.195347 14.862C0.131673 14.9235 0.0808852 14.9971 0.0459458 15.0784C0.0110065 15.1598 -0.00738433 15.2472 -0.00815354 15.3358C-0.00892275 15.4243 0.00794506 15.5121 0.0414657 15.594C0.0749862 15.6759 0.124488 15.7504 0.187083 15.813C0.249679 15.8755 0.324113 15.925 0.406044 15.9586C0.487975 15.9921 0.575761 16.009 0.664281 16.0082C0.752801 16.0074 0.84028 15.989 0.921616 15.9541C1.00295 15.9191 1.07652 15.8684 1.13801 15.8047L3.01801 13.9247C3.78759 14.4735 4.72691 14.7315 5.66885 14.6528C6.61078 14.574 7.49424 14.1637 8.16201 13.4947L9.16201 12.4947C9.28699 12.3697 9.35721 12.2001 9.35721 12.0234C9.35721 11.8466 9.28699 11.677 9.16201 11.552L8.27601 10.6667Z" fill="white" /><path d="M11.5527 9.16133C11.6777 9.28631 11.8472 9.35652 12.024 9.35652C12.2008 9.35652 12.3703 9.28631 12.4953 9.16133L13.4953 8.16133C14.164 7.49351 14.5742 6.61015 14.6528 5.66836C14.7314 4.72658 14.4734 3.78744 13.9247 3.018L15.8047 1.138C15.8684 1.0765 15.9191 1.00294 15.9541 0.921601C15.989 0.840265 16.0074 0.752785 16.0082 0.664266C16.0089 0.575746 15.9921 0.48796 15.9586 0.406029C15.925 0.324098 15.8755 0.249663 15.8129 0.187068C15.7503 0.124473 15.6759 0.074971 15.594 0.0414504C15.5121 0.0079298 15.4243 -0.00893801 15.3357 -0.0081688C15.2472 -0.00739959 15.1597 0.0109912 15.0784 0.0459306C14.9971 0.0808699 14.9235 0.131658 14.862 0.195331L12.982 2.07533C12.2124 1.52651 11.2731 1.26852 10.3312 1.34726C9.38924 1.426 8.50579 1.83636 7.83801 2.50533L6.83801 3.50533C6.71303 3.63035 6.64282 3.79989 6.64282 3.97666C6.64282 4.15344 6.71303 4.32298 6.83801 4.448L11.5527 9.16133Z" fill="white" />
        </svg>,
        keywords: 'electric',
        bg_color: '#0890FE'
    }, {
        icon: () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L10 0L8.00001 2L6.00001 0L4.00001 2L1.33334 0V15.3333C1.33334 15.702 1.63201 16 2.00001 16H14C14.368 16 14.6667 15.702 14.6667 15.3333V0L12 2ZM8.66668 12.6667H4.00001V11.3333H8.66668V12.6667ZM8.66668 10H4.00001V8.66667H8.66668V10ZM8.66668 7.33333H4.00001V6H8.66668V7.33333ZM12 12.6667H10V11.3333H12V12.6667ZM12 10H10V8.66667H12V10ZM12 7.33333H10V6H12V7.33333Z" fill="white" />
        </svg>,
        keywords: 'internet',
        bg_color: "#52D5BA"
    }]


    // FIXME: create a function that searches for the icon that matches the keyword
    const getIcon = (keyword) => {

        for (let index = 0; index < transactionsIcon.length; index++) {
            let transactionKeyword = transactionsIcon[index].keywords;
            let word = keyword.toUpperCase().indexOf(transactionKeyword.toUpperCase());
            if (word >= 0) {
                return transactionsIcon[index];
            }
        }
        return { icon: IoWater, bg_color: '#FF4267' }
    }

    const transactionBoxStyle = {
        BoxBorderColor: useColorModeValue('gray.500', 'gray.700'),
        BoxTextColor: useColorModeValue('gray.900', 'gray.300'),
    }


    return (
        <Stack spacing={0} pt={cid !== 0 && 5} key={cid}>
            <NavItem mb="10px" onClick={setSubMenuOpen.toggle}>
                <Text fontSize="12px" color={useColorModeValue("baseColor.text_gray", "baseColor.text_primary.dark")}>{date}</Text>
                <Icon
                    as={MdKeyboardArrowRight}
                    transition="transform 0.3s ease"
                    color={useColorModeValue("baseColor.text_primary", "baseColor.text_primary.dark")}
                    ml="auto"
                    transform={isSubMenuOpen && "rotate(90deg)"}
                />
            </NavItem>
            {/* {console.log({salary: getIcon("electric")})} */}
            {/* transaction Box */}
            <Collapse in={isSubMenuOpen}>
                {transaction?.map(({ name, transaction_type, status, amount }, sid) => {
                    const { icon, bg_color } = getIcon(name)

                    return <Flex key={amount + sid} justifyContent="space-between" height="60px" w="90%" m="0px 17px 15px 17px" borderBottomColor={transactionBoxStyle.borderColor} borderBottomStyle="solid" borderBottomWidth="1px">
                        <Flex>
                            <Box width="50px"
                                height="50px"
                                fontSize="25px"
                                color="white"
                                alignItems="center"
                                display="flex"
                                justifyContent="center"
                                background={bg_color}
                                borderRadius="10px">
                                <Icon as={icon} />
                            </Box>

                            <Flex flexDirection="column" ml="10px">
                                <Text fontSize="15px" color={transactionBoxStyle.BoxTextColor} mt="3px">{name}</Text>
                                <Text fontSize="12px" color="gray.500">{status}</Text>
                            </Flex>
                        </Flex>

                        <Flex>
                            {transaction_type === 'expense'
                                ? <Text fontSize="15px" fontWeight="bolder" color="#FF4267" mt="3px">-{amount}</Text>
                                : <Text fontSize="15px" fontWeight="bolder" color="#3629B7" mt="3px">+{amount}</Text>
                            }
                        </Flex>
                    </Flex>
                })}
            </Collapse>
        </Stack >
    )
}

function Home() {
    const transactions = [
        {
            date: 'Today',
            transaction: [{
                name: 'Water Bill',
                transaction_type: 'expense',
                status: "Unsuccessfully",
                amount: "$200"
            }]
        },
        {
            date: 'Yesterday',
            transaction: [{
                name: 'Income: Salary Oct',
                transaction_type: 'income',
                amount: "$1200"
            }, {
                name: 'Electric Bill',
                transaction_type: 'expense',
                status: "successfully",
                amount: "$480"
            }, {
                name: 'Income : Jane transfers',
                transaction_type: 'income',
                amount: "$500"
            }, {
                name: 'Internet Bill',
                transaction_type: 'expense',
                amount: "$100"
            }]
        }
    ]

    const transactionBoxStyle = {
        bgColor: useColorModeValue("baseColor.bg_light", "#15161a"),
    }


    return (
        <Box paddingLeft={{ base: "0px", md: "0px", lg: "240px" }}>
            <Sidebar />

            <Flex w="100%" flexDirection={{ base: "column", md: "column", lg: "row" }}>

                {/* first section */}
                <Flex w={{ base: "100%", md: "100%" }} p={{ base: "10px", md: "10px 30px" }} flexDirection="column">
                    {/* Header section */}
                    <Flex w="100%" pb="10px" pl={{ base: "55px", md: "30px", lg: "0px" }}>
                        <SearchBar placeholder="search" />
                        <Profile ml="15px" width="140px" display={{ base: "flex", md: "flex", lg: "none" }} justifyContent="space-around" />
                    </Flex>

                    <Text fontSize="25px" fontWeight="bold" m="20px 0px" color="baseColor.text_primary">Welcome back Tobby!</Text>

                    <Flex justifyContent="space-between" flexWrap="wrap">

                        {
                            [{
                                icon: BsCreditCard,
                                text: "Transfer via card number",
                                bg_color: useColorModeValue("#EDFFEF", '#07230a'),
                                color: "#55A55E",
                                onClick: () => { alert("test") }
                            }, {
                                icon: () => <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" clipRule="evenodd" d="M11.4583 6.00631C10.1153 6.28046 8.83128 6.8133 7.68042 7.58229C5.93314 8.74978 4.57131 10.4092 3.76713 12.3506C2.96295 14.2921 2.75254 16.4284 3.16251 18.4895C3.57247 20.5505 4.58441 22.4437 6.07034 23.9297C7.55627 25.4156 9.44947 26.4275 11.5105 26.8375C13.5716 27.2475 15.7079 27.0371 17.6494 26.2329C19.5908 25.4287 21.2502 24.0669 22.4177 22.3196C23.1867 21.1687 23.7195 19.8847 23.9937 18.5416H19.6056C19.4294 19.0412 19.1907 19.5195 18.8933 19.9646C18.1915 21.0148 17.1942 21.8334 16.0272 22.3167C14.8603 22.8001 13.5763 22.9265 12.3375 22.6801C11.0987 22.4337 9.96076 21.8255 9.06764 20.9324C8.17451 20.0392 7.56629 18.9013 7.31987 17.6625C7.07346 16.4237 7.19993 15.1397 7.68329 13.9728C8.16664 12.8058 8.98517 11.8085 10.0354 11.1067C10.4805 10.8093 10.9588 10.5706 11.4583 10.3944V6.00631ZM12.1696 3.74527C12.9472 3.65851 13.5833 4.30091 13.5833 5.08332V10.7388C13.5833 11.5212 12.9322 12.1335 12.1926 12.3888C11.8495 12.5073 11.521 12.6698 11.216 12.8736C10.5152 13.3418 9.96905 14.0073 9.64653 14.786C9.32401 15.5646 9.23962 16.4214 9.40404 17.248C9.56846 18.0746 9.9743 18.8338 10.5702 19.4298C11.1662 20.0257 11.9254 20.4315 12.752 20.596C13.5786 20.7604 14.4354 20.676 15.214 20.3535C15.9927 20.031 16.6582 19.4848 17.1264 18.784C17.3302 18.479 17.4927 18.1505 17.6112 17.8074C17.8665 17.0678 18.4788 16.4166 19.2612 16.4166H24.9167C25.6991 16.4166 26.3415 17.0528 26.2547 17.8304C26.0292 19.852 25.3223 21.7975 24.1846 23.5002C22.7836 25.5969 20.7923 27.2311 18.4626 28.1961C16.1328 29.1611 13.5692 29.4136 11.0959 28.9217C8.62269 28.4297 6.35086 27.2154 4.56774 25.4323C2.78462 23.6491 1.5703 21.3773 1.07834 18.9041C0.586375 16.4308 0.838868 13.8672 1.80389 11.5374C2.7689 9.20768 4.4031 7.2164 6.49983 5.81541C8.20248 4.67774 10.148 3.97081 12.1696 3.74527Z" fill="#5E5498" /><path fillRule="evenodd" clipRule="evenodd" d="M26.827 11.4584C26.6917 10.7955 26.493 10.1454 26.2329 9.51735C25.6989 8.22826 24.9163 7.05697 23.9297 6.07035C22.9431 5.08373 21.7718 4.3011 20.4827 3.76714C19.8546 3.50698 19.2046 3.30834 18.5417 3.17303V7.56109C18.6489 7.59894 18.7553 7.63968 18.8606 7.6833C19.6354 8.00423 20.3394 8.47464 20.9324 9.06765C21.5254 9.66066 21.9958 10.3647 22.3167 11.1395C22.3604 11.2448 22.4011 11.3511 22.4389 11.4584H26.827ZM29.0881 12.1696C29.1748 12.9472 28.5324 13.5834 27.75 13.5834H22.0945C21.3121 13.5834 20.6999 12.9322 20.4445 12.1926C20.4166 12.1119 20.3863 12.0318 20.3535 11.9527C20.1393 11.4357 19.8255 10.9659 19.4298 10.5702C19.0341 10.1746 18.5643 9.86069 18.0474 9.64654C17.9682 9.61375 17.8882 9.5834 17.8074 9.55551C17.0678 9.30016 16.4167 8.68792 16.4167 7.90551V2.25003C16.4167 1.46762 17.0529 0.825228 17.8304 0.911984C19.0194 1.04464 20.1862 1.34426 21.2959 1.8039C22.8428 2.44464 24.2483 3.3838 25.4323 4.56775C26.6162 5.7517 27.5554 7.15725 28.1961 8.70415C28.6558 9.8138 28.9554 10.9806 29.0881 12.1696Z" fill="#5E5498" />
                                </svg>,
                                text: "Transfer to another bank",
                                bg_color: useColorModeValue("#F4F2FF", "#100d23"),
                                color: "#5E5498",
                                onClick: () => { alert("test") }
                            }, {
                                icon: () => <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.5744 20.9136C25.6956 21.1024 25.8711 21.2498 26.0734 21.347C27.6198 22.0893 28.6875 23.67 28.6875 25.5V28.3333C28.6875 28.9201 29.1632 29.3958 29.75 29.3958C30.3368 29.3958 30.8125 28.9201 30.8125 28.3333V25.5C30.8125 21.7836 27.7998 18.7708 24.0833 18.7708C23.9294 18.7708 23.86 18.9695 23.9764 19.0702C24.593 19.6039 25.132 20.2247 25.5744 20.9136Z" fill="#9B715D" /><path fillRule="evenodd" clipRule="evenodd" d="M9.91667 20.8958C7.37386 20.8958 5.3125 22.9572 5.3125 25.5V28.3333C5.3125 28.9201 4.8368 29.3958 4.25 29.3958C3.6632 29.3958 3.1875 28.9201 3.1875 28.3333V25.5C3.1875 21.7836 6.20025 18.7708 9.91667 18.7708H18.4167C22.1331 18.7708 25.1458 21.7836 25.1458 25.5V28.3333C25.1458 28.9201 24.6701 29.3958 24.0833 29.3958C23.4965 29.3958 23.0208 28.9201 23.0208 28.3333V25.5C23.0208 22.9572 20.9595 20.8958 18.4167 20.8958H9.91667Z" fill="#9B715D" /><path d="M21.0665 13.5398C21.1925 13.3002 21.3928 13.1089 21.6261 12.9717C22.6726 12.3563 23.3749 11.2185 23.3749 9.91667C23.3749 8.61483 22.6726 7.47705 21.6261 6.86162C21.3928 6.72441 21.1925 6.53311 21.0665 6.29358C20.7143 5.62431 20.2676 5.01254 19.7442 4.47601C19.6624 4.3922 19.7162 4.25 19.8333 4.25C22.9629 4.25 25.4999 6.78705 25.4999 9.91667C25.4999 13.0463 22.9629 15.5833 19.8333 15.5833C19.7162 15.5833 19.6624 15.4411 19.7442 15.3573C20.2676 14.8208 20.7143 14.209 21.0665 13.5398Z" fill="#9B715D" /><path fillRule="evenodd" clipRule="evenodd" d="M14.1667 13.4583C16.1227 13.4583 17.7083 11.8727 17.7083 9.91667C17.7083 7.96066 16.1227 6.375 14.1667 6.375C12.2107 6.375 10.625 7.96066 10.625 9.91667C10.625 11.8727 12.2107 13.4583 14.1667 13.4583ZM14.1667 15.5833C17.2963 15.5833 19.8333 13.0463 19.8333 9.91667C19.8333 6.78705 17.2963 4.25 14.1667 4.25C11.0371 4.25 8.5 6.78705 8.5 9.91667C8.5 13.0463 11.0371 15.5833 14.1667 15.5833Z" fill="#9B715D" />
                                </svg>,
                                text: "Transfer to the same bank",
                                bg_color: useColorModeValue("#FFF2EC", "#291207"),
                                color: "#9B715D",
                                onClick: () => { alert("test") }
                            }, {
                                icon: () => <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.1875 28.9316C3.1875 28.3448 3.6632 27.8691 4.25 27.8691H29.75C30.3368 27.8691 30.8125 28.3448 30.8125 28.9316C30.8125 29.5184 30.3368 29.9941 29.75 29.9941H4.25C3.6632 29.9941 3.1875 29.5184 3.1875 28.9316Z" fill="#3A7F92" /><path fillRule="evenodd" clipRule="evenodd" d="M17 15.1191C17.5868 15.1191 18.0625 15.5948 18.0625 16.1816V24.6816C18.0625 25.2684 17.5868 25.7441 17 25.7441C16.4132 25.7441 15.9375 25.2684 15.9375 24.6816V16.1816C15.9375 15.5948 16.4132 15.1191 17 15.1191Z" fill="#3A7F92" /><path fillRule="evenodd" clipRule="evenodd" d="M7.08333 15.1191C7.67013 15.1191 8.14583 15.5948 8.14583 16.1816V24.6816C8.14583 25.2684 7.67013 25.7441 7.08333 25.7441C6.49653 25.7441 6.02083 25.2684 6.02083 24.6816V16.1816C6.02083 15.5948 6.49653 15.1191 7.08333 15.1191Z" fill="#3A7F92" /><path fillRule="evenodd" clipRule="evenodd" d="M26.9167 15.1191C27.5035 15.1191 27.9792 15.5948 27.9792 16.1816V24.6816C27.9792 25.2684 27.5035 25.7441 26.9167 25.7441C26.3299 25.7441 25.8542 25.2684 25.8542 24.6816V16.1816C25.8542 15.5948 26.3299 15.1191 26.9167 15.1191Z" fill="#3A7F92" /><path fillRule="evenodd" clipRule="evenodd" d="M18.3793 5.27224C17.5074 4.85371 16.4926 4.85371 15.6207 5.27224L5.36359 10.1956C5.25198 10.2492 5.20907 10.3111 5.18761 10.3601C5.16147 10.4198 5.15081 10.5025 5.17151 10.5935C5.19221 10.6845 5.23765 10.7545 5.28705 10.797C5.32758 10.8319 5.39305 10.8691 5.51684 10.8691H28.4832C28.607 10.8691 28.6724 10.8319 28.713 10.797C28.7624 10.7545 28.8078 10.6845 28.8285 10.5935C28.8492 10.5025 28.8385 10.4198 28.8124 10.3601C28.791 10.3111 28.748 10.2492 28.6364 10.1956L18.3793 5.27224ZM14.7011 3.3565C16.1543 2.65896 17.8457 2.65896 19.2989 3.3565L29.556 8.27991C31.934 9.42137 31.121 12.9941 28.4832 12.9941H5.51684C2.87901 12.9941 2.06599 9.42137 4.44404 8.2799L14.7011 3.3565Z" fill="#3A7F92" />
                                </svg>,
                                text: "Transfer to another bank",
                                bg_color: useColorModeValue("#ECFBFF", "#06191e"),
                                color: "#3A7F92",
                                onClick: () => { alert("test") }
                            }].map((card, cid) => <LinkBox key={card?.color + cid} m="5px 0px" bg={card.bg_color} as="div" display="flex" flexDirection="column" justifyContent="space-between" padding="20px 10px" width="105px" height="120px" maxW="sm" borderWidth="1px" rounded="md">
                                <Icon color={card.color} as={card.icon} w={6} h={6} />
                                <Text size="md" color={card.color} fontSize="12px">
                                    <LinkOverlay onClick={card.onClick} href="#">
                                        {card.text}
                                    </LinkOverlay>
                                </Text>
                            </LinkBox>)
                        }
                    </Flex>

                    {/* graph section */}
                    <Box mt="5" mb="5">
                        <Flex justifyContent="space-between">
                            <Box>
                                <Text fontSize="12px">Balance</Text>
                                <Flex>
                                    <Text color="baseColor.text_primary" fontWeight="bold" fontSize="25px">1000</Text>
                                    <Text marginLeft="3px"
                                        fontSize="11px"
                                        fontWeight="bold"
                                        marginTop="14px"
                                        color="baseColor.text_gray">USD</Text>
                                </Flex>
                            </Box>

                            <IconButton size="sm" color="baseColor.text_primary" aria-label="Search database" icon={<BsThreeDots />} />
                        </Flex>

                        <HomeDashboardChart />
                    </Box>

                    <>
                        {
                            [{
                                name: "Push",
                                profileImage: img1,
                                id: 12788980890
                            },
                            {
                                name: "Push",
                                profileImage: img2,
                                id: 12788980890
                            }, {
                                name: "Push",
                                profileImage: img3,
                                id: 12788980890
                            }].map((transactionCard, cid) => <Flex key={transactionCard?.id + cid} borderRadius="20px" justifyContent="flex-end" className="transactionCard" m="15px 0px" padding="10px 0px"
                                height="80px" w="100%" bg="baseColor.text_primary" position="relative">
                                <Flex borderColor="gray.700" transition="width 0.3s ease"
                                    background={transactionBoxStyle.bgColor}
                                    borderRadius="20px"
                                    height="76px"
                                    marginTop="2px"
                                    marginLeft="2px"
                                    paddingLeft="9px"
                                    width="99%"
                                    display="flex"
                                    alignItems="center"
                                    pl="9px"
                                    w="99%"
                                    zIndex="1" position="absolute" top="0" left="0" right="0"
                                    sx={{
                                        ".transactionCard:hover &": {
                                            width: '75%',
                                            borderTopRightRadius: "25px",
                                            borderBottomRightRadius: '25px',
                                        }
                                    }}
                                >
                                    <Avatar name={transactionCard.name} src={transactionCard.profileImage} />
                                    <Flex ml="15px" flexDirection="column">
                                        <Text>{transactionCard.name}</Text>
                                        <Text fontSize="14px" color="gray.600">{transactionCard.id}</Text>
                                    </Flex>
                                </Flex>

                                <ButtonGroup spacing="0" display="flex" alignItems="center">
                                    <IconButton _hover={{ background: 'transparent' }} background="transparent"
                                        color="white"
                                        mr="8px"
                                        fontSize="30px" aria-label="delete" icon={<AiOutlineDelete />} />
                                    <IconButton _hover={{ background: 'transparent' }} background="transparent"
                                        color="white"
                                        mr="8px"
                                        fontSize="30px" aria-label="edit" icon={<BsPencil />} />
                                </ButtonGroup>
                            </Flex>
                            )}
                    </>
                </Flex>

                {/* second section */}
                <Flex as="section" flexDirection="column" minH="100vh" bg={useColorModeValue("baseColor.bg_gray", "#1a202c4a")} w={{ base: "100%", md: "100%", lg: "500px" }}>
                    <Flex w="100%" p="10px" justifyContent="flex-end">
                        <Profile width="140px" display={{ base: "none", md: "none", lg: "flex" }} justifyContent="space-around" />
                    </Flex>

                    <Flex flexDirection="column" >
                        <CreditCard >
                            <Box position="absolute"
                                top="0"
                                zIndex="1" >
                                {/* card holder name */}
                                <Text color="white" fontSize="26px" padding="20px 0px 20px 22px">John Smith</Text>
                                <Text marginLeft="24px" fontSize="14px" marginTop="4px" color="white">Amazon Platinium</Text>
                                <Text marginLeft="24px" fontSize="20px" marginTop="10px" color="white"> 4756 **** **** 1234</Text>
                                <Text marginLeft="24px" fontSize="20px" marginTop="10px" color="white">$3.469.52</Text>
                            </Box>
                        </CreditCard>

                        <Button m="auto" w="90%" color="baseColor.text_gray" bg="initial" marginTop="35px" width="100%"
                            height="43px" borderWidth="2px" borderStyle="dashed" borderColor="baseColor.text_gray" size="sm">
                            Add new card
                        </Button>
                    </Flex>

                    <Box marginTop="60px">
                        {
                            transactions.map(({ date, transaction }, cid) => (
                                <TransactionItem key={date + cid} date={date} transaction={transaction} cid={cid} />
                            ))
                        }
                    </Box>
                </Flex>

            </Flex>
        </Box >
    )
}

export default Home;
