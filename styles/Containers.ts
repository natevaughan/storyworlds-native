class Containers {

    get container (): any {
        return {
            marginTop: 20,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }
    }

    get title (): any {
        return {
            fontSize: 40,
            fontWeight: 'bold',
            textAlign: 'center',
        }
    }

    get subtitle (): any {
        return {
            marginTop: 10,
            marginBottom: 30,
            fontSize: 18,
            textAlign: 'center',
        }
    }

    get bigButton (): any {
        return {
            marginBottom: 15,
            padding: 30,
            borderRadius: 15,
        }
    }

    get bigButtonText (): any {
        return {
            fontSize: 18,
        }
    }
}

export const containers = new Containers();