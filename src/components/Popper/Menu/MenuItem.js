import React from 'react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '~/components/Button';
const cx = classNames.bind(styles);

const MenuItem = ({ data }) => {
    return (
        <Button className={cx('menu-item')} to={data.to} leftIcon={data.icon}>
            {data.title}
        </Button>
    );
};

export default MenuItem;
