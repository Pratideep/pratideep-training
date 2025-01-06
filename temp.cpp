#include <iostream>
#include <algorithm>
#include <climits>
#include <vector>
using namespace std;
   long long helper(string s,int k){
        unordered_map<char,int>mp;
        int j=0;
        int cnt=0;
        for(int i=0;i<s.size();i++){
            mp[s[i]]++;
            while(mp.size()>k){
                // cout<<s[j]<<endl;
                mp[s[j]]--;
                if(mp[s[j]]==0){
                    mp.erase(s[j]);
                }
                j++;
            }
            // cout<<i<<" "<<j<<endl;
            cnt+=(i-j+1);
            
        }
        return cnt;
    }
    int countSubstr(string& s, int k) {
        return helper(s,k)-helper(s,k-1);
    }
int main()
{
    cout<<helper("abaacd",1)<<endl;

 return 0;
}