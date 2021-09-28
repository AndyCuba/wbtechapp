const lampsUrl = 'https://private-anon-9fc3ae6c6b-lampshop.apiary-mock.com/lamps';

class LampsData {
    lamps = [];

    getLamps() {
        return this.lamps;
    };

    getActiveLamp() {
        return this.lamps.find(lamp => lamp.isAcive === true);
    };
    
    //Add isActive key to lamps objects and makes first object active
    addActiveKey(array) {
        array.forEach((item, index) => {
            if (index === 0) {
                item.isActive = true;
            } else item.isActive = false;
        });

        return array;
    };

    async fetchLamps(url = lampsUrl) {
        return fetch(url).
            then(res => res.json()).
            then(this.addActiveKey).
            then(lamps => this.lamps = lamps).
            catch(console.log);
    };

    //Sets active lamp by id
    setActiveLamp(id) {
        console.log(id)
        if (id) {
            this.lamps = this.lamps.map(lamp => {
                if (lamp.isActive) {
                    lamp.isActive = false;
                };
                
                if (lamp.id === id) {
                    lamp.isActive = true;
                }
                return lamp;
            });
            console.log(this.lamps)
        } 
    };
};

export default LampsData;