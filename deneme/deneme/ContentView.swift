import SwiftUI
import WebKit

struct WebView: UIViewRepresentable {
    
    let url: String
    
    func makeUIView(context: Context) -> WKWebView {
        return WKWebView()
    }
    
    func updateUIView(_ webView: WKWebView, context: Context) {
        if let siteURL = URL(string: url) {
            let request = URLRequest(url: siteURL)
            webView.load(request)
        }
    }
}

struct ContentView: View {
    var body: some View {
        WebView(url: "https://terracemerdinotel.com/")
            .ignoresSafeArea()
    }
}

#Preview {
    ContentView()
}
