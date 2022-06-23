from abc import ABC, abstractmethod


class Access(ABC):
    @abstractmethod
    def __init__(self, can_access=False):
        raise NotImplementedError

    @abstractmethod
    def set_permission(self, can_access):
        raise NotImplementedError


class Support(Access):
    def __init__(self, can_access=False):
        self.name = "Support"
        self.set_permission(can_access)

    def set_permission(self, can_access):
        self.can_access = can_access


class Finances(Access):
    def __init__(self, can_access=False):
        self.name = "Finances"
        self.set_permission(can_access)

    def set_permission(self, can_access):
        self.can_access = can_access


class Sales(Access):
    def __init__(self, can_access=False):
        self.name = "Sales"
        self.set_permission(can_access)

    def set_permission(self, can_access):
        self.can_access = can_access


class Account(ABC):
    def __init__(self, username):
        self.username = username
        self.__permissions = []
        self.create_account()

    @abstractmethod
    def create_account():
        raise NotImplementedError

    def show_permissions(self):
        permissions_names = [
            permission.name for permission in self.__permissions
        ]
        return permissions_names

    def add_permissions(self, permission):
        self.__permissions.append(permission)


class SupportAccount(Account):
    def create_account(self):
        self.add_permissions(Support(True))


class SalesSupportAccount(Account):
    def create_account(self):
        self.add_permissions(Support(True))
        self.add_permissions(Sales(True))


class ManagerAccount(Account):
    def create_account(self):
        self.add_permissions(Support(True))
        self.add_permissions(Finances(True))
        self.add_permissions(Sales(True))


if __name__ == "__main__":
    account = ManagerAccount("Gus")
    print(account.show_permissions())
