const lampsUrl = 'https://private-anon-9fc3ae6c6b-lampshop.apiary-mock.com/lamps';

class LampsData {
    lamps = [];
    active;

    getLamps() {
        return this.lamps;
    };

    async fetchLamps(url = lampsUrl) {
        return fetch(url).
            then(res => res.json()).
            then(lamps => this.lamps = lamps).
            catch(console.log);
    };

    setActiveLamp(id) {
        const newActiveLamp = this.lamps.find(item => item.id === id);
        this.active = newActiveLamp;
    };
};

export default LampsData;