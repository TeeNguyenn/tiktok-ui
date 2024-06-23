import React from 'react';
import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const AccountItem = () => {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/45cdacbd2595b03bfe09605f32520a2b.jpeg?lk3s=a5d48078&nonce=74677&refresh_token=9ba3d6d7b8fa6720942c2b8047cdd518&x-expires=1719216000&x-signature=%2FrGrhB4VJBKX05U3i6mUf7WGQ%2BA%3D&shp=a5d48078&shcp=b59d6b55"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Minh Tee</span>
                    <img src={images.check} alt="" />
                </h4>
                <span className={cx('username')}>nguyenminhtee</span>
            </div>
        </div>
    );
};

export default AccountItem;
