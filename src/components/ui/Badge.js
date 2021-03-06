/**
 * Badge - type
 *
 <Badge type={'gold') />
 *
 */

import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

import PropTypes from 'prop-types';

// Components
import {Text} from '@ui/';

const styles = StyleSheet.create({
    badge: {
        height: 15,
        width: 37,
        top: 3,
        marginLeft: 5,
        borderRadius: 20
    },
    badgeGold: {
        backgroundColor: '#F9BA32'
    },
    badgeVip: {
        backgroundColor: '#006C84'
    },
    badgeStaff: {
        backgroundColor: '#E7472E'
    },
    badgeAdmin: {
        backgroundColor: '#C8000A'
    },
    badgeOwner: {
        backgroundColor: '#00b7d3',
        height: 10,
        width: 30
    },
    text: {
        lineHeight: 14,
        fontSize: 10,
        color: 'white',
        textAlign: 'center'
    }
});

const styleSelector = (type) => {
    switch (type) {
        case 'gold':
            return styles.badgeGold;
        case 'vip staff':
        case 'staff':
            return styles.badgeStaff;
        case 'vip admin':
        case 'admin':
            return styles.badgeAdmin;
        case 'vip':
            return styles.badgeVip;
        case 'owner':
            return styles.badgeOwner;
        default:
            break;
    }

    return null;
};

const textSelector = (type) => {
    switch (type) {
        case 'gold':
            return 'GOLD';
        case 'vip staff':
        case 'staff':
            return 'STAFF';
        case 'vip admin':
        case 'admin':
            return 'ADMIN';
        case 'vip':
            return 'VIP';
        case 'owner':
            return 'Owner';
        default:
            break;
    }

    return null;
};

const Badge = ({type}) => (
    <View>
        <View style={[styleSelector(type), styles.badge]} >
            <Text style={[styles.text]} p>{textSelector(type)}</Text>
        </View>
    </View>
);

Badge.propTypes = {
    type: PropTypes.string
};

Badge.defaultProps = {
    type: ''
};

Badge.componentName = 'Badge';

/* Export Component ==================================================================== */
export default Badge;
