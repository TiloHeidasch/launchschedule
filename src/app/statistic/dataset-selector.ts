import { uuid } from 'uuidv4';
import { Md5 } from 'ts-md5/dist/md5';
import { TypeFilterItem } from './type-filter-item';
import { DatasetSelectorType } from './dataset-selector-type';
import { LaunchLibraryService } from '../launch-library.service';
import { StatisticParamStoreService } from './statistic-param-store.service';
import { TypeFilterItemType } from './type-filter-item-type';


export class DatasetSelector {
    private id: string;
    private name: string;
    private type: DatasetSelectorType;
    private search: string;
    private color: string;
    typeFilterItems: TypeFilterItem[];
    private service: LaunchLibraryService;
    private store: StatisticParamStoreService;
    private rocket: { value: number, name: string };
    private agency: { value: number, name: string };
    private pad: { value: number, name: string };
    private location: { value: number, name: string };


    constructor(service: LaunchLibraryService, store: StatisticParamStoreService) {
        this.id = uuid();
        this.name = 'Something';
        this.type = undefined;
        this.search = '';
        this.typeFilterItems = [];
        this.generateColor();
        this.service = service;
        this.store = store;
    }

    getId() {
        return this.id;
    }

    private generateDatasetSelectorName() {
        let name = 'Something';
        if (this.type !== undefined) {
            name = this.type;
        }
        if (this.search !== undefined && this.search !== '') {
            name += ' named \'' + this.search + '\'';
        }
        if (this.rocket !== undefined) {
            name += ' with Rocket \'' + this.rocket.name + '\'';
        }
        if (this.agency !== undefined) {
            name += ' by \'' + this.agency.name + '\'';
        }
        if (this.pad !== undefined) {
            name += ' from \'' + this.pad.name + '\'';
        }
        if (this.location !== undefined) {
            name += ' from \'' + this.location.name + '\'';
        }
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setType(type) {
        if (type === 'None') {
            this.type = undefined
        } else {
            this.type = type;
        }
        this.rocket = undefined;
        this.agency = undefined;
        this.pad = undefined;
        this.location = undefined;
        this.generateDatasetSelectorName();
        this.generateTypeFilterItems();
        this.generateColor();
    }
    getType() {
        return this.type;
    }
    setSearch(search) {
        this.search = search;
        this.generateDatasetSelectorName();
        this.generateColor();
    }
    getSearch() {
        return this.search;
    }
    getColor() {
        return this.color;
    }
    getTypeFilterItems() {
        return this.typeFilterItems;
    }
    setRocket(rocket: { value: number, name: string }) {
        this.rocket = rocket;
        this.generateDatasetSelectorName();
        this.generateColor();
    }
    getRocketId() {
        if (this.rocket !== undefined) {
            return this.rocket.value;
        }
        return undefined;
    }
    setAgency(agency: { value: number, name: string }) {
        this.agency = agency;
        this.generateDatasetSelectorName();
        this.generateColor();
    }
    getAgencyId() {
        if (this.agency !== undefined) {
            return this.agency.value;
        }
        return undefined;
    }
    setPad(pad: { value: number, name: string }) {
        this.pad = pad;
        this.generateDatasetSelectorName();
        this.generateColor();
    }
    getPadId() {
        if (this.pad !== undefined) {
            return this.pad.value;
        }
        return undefined;
    }
    setLocation(location: { value: number, name: string }) {
        this.location = location;
        this.generateDatasetSelectorName();
        this.generateColor();
    }
    getLocationId() {
        if (this.location !== undefined) {
            return this.location.value;
        }
        return undefined;
    }
    private generateTypeFilterItems() {
        switch (this.type) {
            case DatasetSelectorType.Agencies:
                //this.generateAgencyTypeFilterItems();
                break;
            case DatasetSelectorType.Launches:
                this.generateLaunchTypeFilterItems();
                break;
            case DatasetSelectorType.Missions:
                //this.generateMissionTypeFilterItems();
                break;
            case DatasetSelectorType.Pads:
                //this.generatePadTypeFilterItems();
                break;
            case DatasetSelectorType.Payloads:
                //this.generatePayloadTypeFilterItems();
                break;
            case DatasetSelectorType.Rockets:
                //this.generateRocketTypeFilterItems();
                break;

            default:
                this.typeFilterItems = [];
                break;
        }
    }
    private generateColor() {
        const md5 = new Md5();
        md5.appendStr(this.name === undefined ? '' : this.name);
        this.color = '#' + md5.end().toString().toUpperCase().substr(0, 6);
    }
    private async generateLaunchTypeFilterItems() {
        this.typeFilterItems = [];
        this.addRocketTypeFilter();
        this.addAgencyTypeFilter();
        this.addPadTypeFilter();
        this.addLocationTypeFilter();
    }
    private async addAgencyTypeFilter() {
        const typeFilterItem: TypeFilterItem = { type: TypeFilterItemType.Agency, options: [] };
        this.typeFilterItems.push(typeFilterItem);
        let entries: any[];
        if (this.store.allAgencies.length === 0) {
            entries = await this.service.getAllAgencies();
            this.store.allAgencies = entries;
        } else {
            entries = this.store.allAgencies;
        }
        entries.forEach(entry => {
            typeFilterItem.options.push({ value: entry.id, name: entry.name });
        });
        typeFilterItem.options = this.sortOptions(typeFilterItem.options);
    }
    private async addRocketTypeFilter() {
        const typeFilterItem: TypeFilterItem = { type: TypeFilterItemType.Rocket, options: [] };
        this.typeFilterItems.push(typeFilterItem);
        let entries: any[];
        if (this.store.allRockets.length === 0) {
            entries = await this.service.getAllRockets();
            this.store.allRockets = entries;
        } else {
            entries = this.store.allRockets;
        }
        entries.forEach(entry => {
            typeFilterItem.options.push({ value: entry.id, name: entry.name });
        });
        typeFilterItem.options = this.sortOptions(typeFilterItem.options);
    }
    private async addPadTypeFilter() {
        const typeFilterItem: TypeFilterItem = { type: TypeFilterItemType.Pad, options: [] };
        this.typeFilterItems.push(typeFilterItem);
        let entries: any[];
        if (this.store.allPads.length === 0) {
            entries = await this.service.getAllPads();
            this.store.allPads = entries;
        } else {
            entries = this.store.allPads;
        }
        entries.forEach(entry => {
            typeFilterItem.options.push({ value: entry.id, name: entry.name });
        });
        typeFilterItem.options = this.sortOptions(typeFilterItem.options);
    }
    private async addLocationTypeFilter() {
        const typeFilterItem: TypeFilterItem = { type: TypeFilterItemType.Location, options: [] };
        this.typeFilterItems.push(typeFilterItem);
        let entries: any[];
        if (this.store.allLocations.length === 0) {
            entries = await this.service.getAllLocations();
            this.store.allLocations = entries;
        } else {
            entries = this.store.allLocations;
        }
        entries.forEach(entry => {
            typeFilterItem.options.push({ value: entry.id, name: entry.name });
        });
        typeFilterItem.options = this.sortOptions(typeFilterItem.options);
    }
    private sortOptions(options: { name: string, value: number }[]): { name: string, value: number }[] {
        return options.sort((o1, o2) => {
            if (o1.name > o2.name) {
                return 1;
            }
            if (o1.name < o2.name) {
                return -1;
            }
            return 0;
        });
    }
}