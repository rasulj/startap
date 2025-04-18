import { Box, Button, Flex, Grid, HStack, Text, useColorModeValue } from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import { AiFillShopping } from 'react-icons/ai';
import SectionTitle from 'src/components/section-title/section-title';
import { booksCategory } from 'src/config/constants';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { withLayout } from 'src/layouts/layout';
import { useTypedSelector } from 'src/hooks/useTypedSelector';
import Image from 'next/image';
import { loadImage } from 'src/helpers/image.helper';

const BooksPageComponent = () => {
	const [filter, setFilter] = useState<string>('all-categories');
    const { books } = useTypedSelector(state => state.books);
	const backgroundColor = useColorModeValue('gray.200', 'gray.900');
	const { t } = useTranslation();

	const filteredData = useCallback(() => {
		switch (filter) {
			case 'programming':
				return books.filter(c => c.category === 'programming');
			case 'design':
				return books.filter(c => c.category === 'design');
			case 'business':
				return books.filter(c => c.category == 'business');
			case 'history':
				return books.filter(c => c.category == 'history');
			case 'writing':
				return books.filter(c => c.category == 'writing');
			case 'lifestyle':
				return books.filter(c => c.category == 'lifestyle');
			default:
				return books;
		}
	}, [filter]);

	return (
		<Box mb={20}>
			<SectionTitle
				title={t('title', { ns: 'books' })}
				subtitle={t('description', { ns: 'books' })}
				textAlign={'center'}
				pt={4}
			/>
			<Flex justify={'center'} mt={5} flexWrap={'wrap'}>
				{booksCategory.map((item, idx) => (
					<Button
						key={item.id}
						colorScheme={'facebook'}
						variant={filter == item.id ? 'solid' : 'outline'}
						borderRadius={0}
						borderLeftRadius={idx == 0 ? 'md' : 0}
						borderRightRadius={booksCategory.length - 1 === idx ? 'md' : 0}
						onClick={() => setFilter(item.id)}
					>
						{t(item.label, { ns: 'books' })}
					</Button>
				))}
			</Flex>

			<Grid
				gridTemplateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }}
				rowGap={20}
				gap={4}
				mt={5}
			>
				{filteredData().map(item => (
					<motion.div key={item._id} layout>
						<Box pos={'relative'}>
								<Box pos={'relative'} w={'full'} h={'250px'}>
 								<Image
 									src={loadImage(item.image)}
 									alt={item.title}
 									fill
 									style={{ borderRadius: '10px', objectFit: 'cover' }}
 								/>
 							</Box>
							<HStack
								pos={'absolute'}
								minH={'90px'}
								borderRadius={'lg'}
								boxShadow={'dark-lg'}
								bg={backgroundColor}
								left={2}
								right={2}
								bottom={-10}
								p={2}
								justify={'space-between'}
							>
								<Box>
									<Text fontSize={'md'}>{item.title}</Text>
									<Text fontWeight={'bold'} fontSize={'2xl'}>
										{item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
									</Text>
								</Box>
								<Button colorScheme={'facebook'} rightIcon={<AiFillShopping />}>
									Buy
								</Button>
							</HStack>
						</Box>
					</motion.div>
				))}
			</Grid>
		</Box>
	);
};
export default withLayout(BooksPageComponent) ;
