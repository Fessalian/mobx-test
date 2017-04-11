export default () => {
    const [min, max] = [Math.ceil(1), Math.floor( 99999 )];
    return ( new Date() ).valueOf() + Math.floor( Math.random() * ( max - min ) ) + min;
};

