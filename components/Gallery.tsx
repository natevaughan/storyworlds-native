import React, {useRef, useState} from "react";
import {useWindowDimensions, FlatList, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {usePrevious} from "../helpers/usePrevious";
import { getOpacity } from "../helpers/getOpacity";

const isJSX = element => typeof element !== 'function' && typeof element?.type === 'object';
const isMemo = element => typeof element !== 'function' && typeof element?.type === 'function';

/**
 * Adapted from react-native-screens-swiper
 * https://www.npmjs.com/package/react-native-screens-swiper
 */
export default function Gallery({style, data, isStaticPills, initialScrollIndex, stickyHeaderEnabled, children, stickyHeaderIndex, scrollableContainer, ...rest}) {
    const width = useWindowDimensions().width;
    const flatList = useRef(null);
    const containerRef = useRef(null);
    const scrollViewRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(initialScrollIndex || 0);
    const prevIndex = usePrevious(currentIndex);
    const buttonsCoords = React.useRef([]).current;
    const [x, setX] = useState(0);

    // collect button layouts
    const onButtonLayout = index => e => {
        if (buttonsCoords[index]?.x !== e.x)
            buttonsCoords[index] = e.nativeEvent.layout;
    };
    const onButtonPress = index => flatList.current?.scrollToIndex({index});

    const onFlatListScroll = e => {
        // update X
        setX(e.nativeEvent.contentOffset.x);

        // update current screen index
        const index = Math.round(e.nativeEvent.contentOffset.x / width);
        if (index !== currentIndex)
            setCurrentIndex(index);

        // scroll to next button if have to
        if (buttonsCoords[currentIndex] && prevIndex !== currentIndex) {
            const buttonLayout = buttonsCoords[currentIndex];
            scrollViewRef.current?.scrollTo({
                // target X is button's X + hald of button's width - hald of screen width
                x: buttonLayout.x + buttonLayout.width / 2 - (width / 2),
                y: 0,
                animated: true,
            });
        }
    };
    const keyExtractor = (item: any, index: number) => String(index);
    const getItemLayout = (data: any, index: number) => ({
        length: width,
        offset: width * index,
        index,
    });
    const renderItem = ({item: {component: Component, props = {}}, index}) => (
        <View style={{width}}>
            {isJSX(Component) && Component}
            {(typeof Component === 'function' || isMemo(Component)) && <Component {...props} index={index}/>}
        </View>
    );

    return (
        <>
            <View style={styles.main} />
            {children}
            <FlatList
                ref={flatList}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                onScroll={onFlatListScroll}
                pagingEnabled
                keyExtractor={keyExtractor}
                getItemLayout={getItemLayout}
                horizontal={true}
                data={data}
                renderItem={renderItem}
                snapToAlignment={'center'}
                style={styles.flatList}
                initialScrollIndex={initialScrollIndex}
                {...rest}
            />
            <View>
                <View style={styles.container}>
                    {!!data?.length && data.map((item: any, index: number) => (
                        <View key={index}>
                            <TouchableOpacity
                                onPress={() => {
                                    onButtonPress(index)
                                    if (index === currentIndex && scrollableContainer)
                                        containerRef?.current?.scrollTo({ x: 0, y: 0, animated: true })
                                }}
                                style={[
                                    {
                                        paddingHorizontal: 8,
                                        alignItems: 'center',
                                    },
                                    style?.pillButton,
                                ]}>
                                <View style={[
                                    styles.slideIndicator,
                                    {
                                        // for fade in and fade out animation
                                        opacity: getOpacity(index, x) / .8 + .2,
                                    }
                                ]}/>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            </View>
        </>
    );
};

const styles = {
    main: {
        marginTop: 15
    },
    pillButton: {
        height: 32,
        backgroundColor: '#c8c8c8',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 5,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    pillContainer: {
        paddingHorizontal: 5,
        borderRadius: 5,
        marginHorizontal: 5,
        backgroundColor: 'blue'
    },
    flatList: {
        flex: 1,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 15,
    },
    slideIndicator: {
        backgroundColor: '#123456',
        padding: 7,
        borderRadius: 7,
    }
};
